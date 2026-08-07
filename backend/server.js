const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const env = require('./config/env');
const { initDb, closeDb } = require('./config/db');
const apiRoutes = require('./routes');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.set('trust proxy', 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.corsOrigins.includes(origin) || env.isDev) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-api-key'],
  })
);

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(morgan(env.isDev ? 'dev' : 'combined'));

const limiter = rateLimit({
  windowMs: env.rateLimitWindowMs,
  max: env.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
});

app.use('/api', limiter);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Birla Heritage School API',
    version: '2.0.0',
    docs: {
      health:                 'GET    /api/health',
      // Contact Messages
      contactCreate:          'POST   /api/contact',
      contactList:            'GET    /api/contact           (x-api-key) ?status= ?limit= ?offset=',
      contactGet:             'GET    /api/contact/:id       (x-api-key)',
      contactUpdateStatus:    'PATCH  /api/contact/:id/status (x-api-key) { status }',
      contactDelete:          'DELETE /api/contact/:id       (x-api-key)',
      // Admission Enquiries
      admissionCreate:        'POST   /api/admissions',
      admissionList:          'GET    /api/admissions        (x-api-key) ?status= ?grade= ?limit= ?offset=',
      admissionGet:           'GET    /api/admissions/:id    (x-api-key)',
      admissionUpdateStatus:  'PATCH  /api/admissions/:id/status (x-api-key) { status }',
      admissionDelete:        'DELETE /api/admissions/:id    (x-api-key)',
    },
    contactStatuses:   ['new', 'read', 'replied', 'archived'],
    admissionStatuses: ['new', 'under_review', 'accepted', 'rejected', 'archived'],
    grades:            ['nursery', 'lkg', 'ukg', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  });
});

app.use('/api', apiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

async function start() {
  await initDb();
  const server = app.listen(env.port, env.host, () => {
    console.log(`API running at http://${env.host}:${env.port}`);
    console.log(`SQLite DB: ${env.dbPath}`);
  });

  const shutdown = (signal) => {
    console.log(`\n${signal} received. Shutting down...`);
    server.close(() => {
      closeDb();
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

if (require.main === module) {
  start().catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
}

module.exports = app;
