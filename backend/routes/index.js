const express = require('express');
const healthRoutes = require('./healthRoutes');
const admissionRoutes = require('./admissionRoutes');
const contactRoutes = require('./contactRoutes');
const galleryRoutes = require('./galleryRoutes');
const announcementRoutes = require('./announcementRoutes');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/health', healthRoutes);
router.use('/auth', authRoutes);
router.use('/admissions', admissionRoutes);
router.use('/contact', contactRoutes);
router.use('/gallery', galleryRoutes);
router.use('/announcements', announcementRoutes);

module.exports = router;
