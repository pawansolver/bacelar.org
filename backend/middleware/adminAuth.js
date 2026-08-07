const env = require('../config/env');

function adminAuth(req, res, next) {
  if (!env.adminApiKey) {
    return res.status(503).json({
      success: false,
      message: 'Admin API key is not configured on the server',
    });
  }

  const key = req.header('x-api-key');
  if (!key || key !== env.adminApiKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Provide a valid x-api-key header.',
    });
  }

  return next();
}

module.exports = adminAuth;
