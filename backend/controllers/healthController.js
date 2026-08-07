const fs = require('fs');
const env = require('../config/env');
const { get } = require('../config/db');

function health(req, res) {
  let dbOk = false;
  try {
    const row = get('SELECT 1 AS ok');
    dbOk = Number(row?.ok) === 1;
  } catch (err) {
    dbOk = false;
  }

  res.status(dbOk ? 200 : 503).json({
    success: dbOk,
    message: dbOk ? 'OK' : 'Database unavailable',
    data: {
      service: 'birla-heritage-backend',
      env: env.nodeEnv,
      dbFile: env.dbPath,
      dbExists: fs.existsSync(env.dbPath),
      dbOk,
      time: new Date().toISOString(),
    },
  });
}

module.exports = { health };
