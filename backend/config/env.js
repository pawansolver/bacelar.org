const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const toInt = (value, fallback) => {
  const n = Number.parseInt(String(value ?? ''), 10);
  return Number.isFinite(n) ? n : fallback;
};

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: toInt(process.env.PORT, 5000),
  host: process.env.HOST || '0.0.0.0',
  dbPath: path.resolve(
    __dirname,
    '..',
    process.env.DB_PATH || './data/school.db'
  ),
  corsOrigins: String(process.env.CORS_ORIGINS || 'http://localhost:3000')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean),
  adminApiKey: process.env.ADMIN_API_KEY || '',
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-change-me',
  rateLimitWindowMs: toInt(process.env.RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000),
  rateLimitMax: toInt(process.env.RATE_LIMIT_MAX, 100),
  isDev: (process.env.NODE_ENV || 'development') !== 'production',
};

module.exports = env;
