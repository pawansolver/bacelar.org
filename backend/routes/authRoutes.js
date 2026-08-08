const express  = require('express');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const env      = require('../config/env');
const AdminUser = require('../models/AdminUser');
const asyncHandler = require('../middleware/asyncHandler');

const router = express.Router();

const SALT_ROUNDS = 10;
const TOKEN_EXPIRY = '8h';

/* ─── helpers ─────────────────────────────────────────────────────────────── */
function signToken(user) {
  return jwt.sign(
    { sub: user.id, username: user.username, role: user.role },
    env.jwtSecret,
    { expiresIn: TOKEN_EXPIRY }
  );
}

function publicUser(user) {
  return {
    id:        user.id,
    username:  user.username,
    email:     user.email,
    fullName:  user.fullName,
    role:      user.role,
    lastLogin: user.lastLogin,
    createdAt: user.createdAt,
  };
}

/* ─── POST /api/auth/signup ────────────────────────────────────────────────── */
router.post('/signup', asyncHandler(async (req, res) => {
  const { username, email, password, fullName } = req.body || {};

  // Validation
  const errors = [];
  if (!username || username.trim().length < 3)
    errors.push({ field: 'username', message: 'Username must be at least 3 characters' });
  if (username && username.trim().length > 30)
    errors.push({ field: 'username', message: 'Username must be 30 characters or fewer' });
  if (!/^[a-zA-Z0-9._-]+$/.test(username || ''))
    errors.push({ field: 'username', message: 'Username can only contain letters, numbers, dots, hyphens, underscores' });

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push({ field: 'email', message: 'Valid email is required' });

  if (!password || password.length < 8)
    errors.push({ field: 'password', message: 'Password must be at least 8 characters' });
  if (password && password.length > 128)
    errors.push({ field: 'password', message: 'Password too long (max 128 characters)' });

  if (errors.length) {
    return res.status(422).json({ success: false, message: 'Validation failed', errors });
  }

  // Check for duplicates
  const existingByUsername = AdminUser.findByUsername(username.trim());
  if (existingByUsername) {
    return res.status(409).json({ success: false, message: 'Username already taken', errors: [{ field: 'username', message: 'This username is already in use' }] });
  }

  const existingByEmail = AdminUser.findByEmail(email.trim());
  if (existingByEmail) {
    return res.status(409).json({ success: false, message: 'Email already registered', errors: [{ field: 'email', message: 'An account with this email already exists' }] });
  }

  // Hash password & create user
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = AdminUser.create({
    username:     username.trim(),
    email:        email.trim().toLowerCase(),
    passwordHash,
    fullName:     fullName?.trim() || null,
    role:         AdminUser.countAll() === 1 ? 'super_admin' : 'admin', // first user = super_admin
  });

  const token = signToken(user);
  AdminUser.updateLastLogin(user.id);

  return res.status(201).json({
    success: true,
    message: 'Account created successfully',
    token,
    expiresIn: TOKEN_EXPIRY,
    user: publicUser(user),
  });
}));

/* ─── POST /api/auth/login ─────────────────────────────────────────────────── */
router.post('/login', asyncHandler(async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
  }

  // Look up by username OR email
  const user = AdminUser.findByUsername(username.trim())
            || AdminUser.findByEmail(username.trim());

  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  if (!user.isActive) {
    return res.status(403).json({ success: false, message: 'Account is disabled. Contact system administrator.' });
  }

  // Verify password
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ success: false, message: 'Invalid username or password' });
  }

  const token = signToken(user);
  AdminUser.updateLastLogin(user.id);

  return res.json({
    success: true,
    message: 'Login successful',
    token,
    expiresIn: TOKEN_EXPIRY,
    user: publicUser(user),
  });
}));

/* ─── POST /api/auth/verify ────────────────────────────────────────────────── */
router.post('/verify', asyncHandler(async (req, res) => {
  const authHeader = req.header('authorization') || '';
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : req.header('x-api-key') || (req.body || {}).token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret);
    const user = AdminUser.findById(payload.sub);
    if (!user || !user.isActive) {
      return res.status(401).json({ success: false, message: 'Session invalid or account disabled' });
    }
    return res.json({ success: true, message: 'Session valid', user: publicUser(user) });
  } catch {
    return res.status(401).json({ success: false, message: 'Token expired or invalid' });
  }
}));

/* ─── GET /api/auth/me ─────────────────────────────────────────────────────── */
router.get('/me', asyncHandler(async (req, res) => {
  const authHeader = req.header('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) return res.status(401).json({ success: false, message: 'Not authenticated' });

  try {
    const payload = jwt.verify(token, env.jwtSecret);
    const user = AdminUser.findById(payload.sub);
    if (!user) return res.status(401).json({ success: false, message: 'User not found' });
    return res.json({ success: true, user: publicUser(user) });
  } catch {
    return res.status(401).json({ success: false, message: 'Token expired' });
  }
}));

module.exports = router;
