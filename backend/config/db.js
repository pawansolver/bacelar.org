const fs = require('fs');
const path = require('path');
const initSqlJs = require('sql.js');
const env = require('./env');

let db;
let readyPromise;

function ensureDir() {
  const dir = path.dirname(env.dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function persist() {
  if (!db) return;
  ensureDir();
  const data = db.export();
  fs.writeFileSync(env.dbPath, Buffer.from(data));
}

function migrate() {
  db.run(`
    CREATE TABLE IF NOT EXISTS admission_enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_first_name TEXT NOT NULL,
      student_last_name TEXT,
      student_dob TEXT NOT NULL,
      student_aadhaar TEXT NOT NULL,
      grade TEXT NOT NULL,
      parent_guardian_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      street_address TEXT NOT NULL,
      street_address_line2 TEXT NOT NULL,
      city TEXT NOT NULL,
      state TEXT NOT NULL,
      pin_code TEXT NOT NULL,
      country TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      ip_address TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  db.run(`
    CREATE INDEX IF NOT EXISTS idx_admission_email
      ON admission_enquiries (email);
  `);
  db.run(`
    CREATE INDEX IF NOT EXISTS idx_admission_phone
      ON admission_enquiries (phone);
  `);
  db.run(`
    CREATE INDEX IF NOT EXISTS idx_admission_created
      ON admission_enquiries (created_at);
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      ip_address TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  db.run(`
    CREATE INDEX IF NOT EXISTS idx_contact_email
      ON contact_messages (email);
  `);
  db.run(`
    CREATE INDEX IF NOT EXISTS idx_contact_created
      ON contact_messages (created_at);
  `);

  persist();
}

async function initDb() {
  if (db) return db;
  if (readyPromise) return readyPromise;

  readyPromise = (async () => {
    ensureDir();
    const SQL = await initSqlJs();

    if (fs.existsSync(env.dbPath)) {
      const fileBuffer = fs.readFileSync(env.dbPath);
      db = new SQL.Database(fileBuffer);
    } else {
      db = new SQL.Database();
    }

    migrate();
    return db;
  })();

  return readyPromise;
}

function getDb() {
  if (!db) {
    throw new Error('Database not initialized. Call initDb() before using getDb().');
  }
  return db;
}

function run(sql, params = []) {
  getDb().run(sql, params);
}

function lastInsertId() {
  // Must be read BEFORE persist()/export() — export resets last_insert_rowid in sql.js
  const result = getDb().exec('SELECT last_insert_rowid() AS id');
  return Number(result?.[0]?.values?.[0]?.[0] || 0);
}

function get(sql, params = []) {
  const stmt = getDb().prepare(sql);
  try {
    if (params.length) stmt.bind(params);
    if (stmt.step()) {
      return stmt.getAsObject();
    }
    return undefined;
  } finally {
    stmt.free();
  }
}

function all(sql, params = []) {
  const stmt = getDb().prepare(sql);
  try {
    if (params.length) stmt.bind(params);
    const rows = [];
    while (stmt.step()) {
      rows.push(stmt.getAsObject());
    }
    return rows;
  } finally {
    stmt.free();
  }
}

function closeDb() {
  if (db) {
    persist();
    db.close();
    db = null;
    readyPromise = null;
  }
}

module.exports = {
  initDb,
  getDb,
  closeDb,
  persist,
  run,
  lastInsertId,
  get,
  all,
};
