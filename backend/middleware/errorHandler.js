const env = require('../config/env');

function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

function errorHandler(err, req, res, next) {
  const status = err.statusCode || err.status || 500;
  const payload = {
    success: false,
    message: err.message || 'Internal server error',
  };

  if (err.errors) {
    payload.errors = err.errors;
  }

  if (env.isDev && status >= 500) {
    payload.stack = err.stack;
  }

  if (status >= 500) {
    console.error('[error]', err);
  }

  res.status(status).json(payload);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
