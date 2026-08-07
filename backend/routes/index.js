const express = require('express');
const healthRoutes = require('./healthRoutes');
const admissionRoutes = require('./admissionRoutes');
const contactRoutes = require('./contactRoutes');

const router = express.Router();

router.use('/health', healthRoutes);
router.use('/admissions', admissionRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
