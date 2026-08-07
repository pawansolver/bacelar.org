const express = require('express');
const contactController = require('../controllers/contactController');
const validate = require('../middleware/validate');
const adminAuth = require('../middleware/adminAuth');
const { contactSchema } = require('../validations/contactValidation');

const router = express.Router();

// Public: Submit a contact message
router.post('/', validate(contactSchema), contactController.createContact);

// Admin-only: Read operations
router.get('/', adminAuth, contactController.listContacts);
router.get('/:id', adminAuth, contactController.getContact);

// Admin-only: Update & Delete (full CRUD)
router.patch('/:id/status', adminAuth, contactController.updateContactStatus);
router.delete('/:id', adminAuth, contactController.deleteContact);

module.exports = router;
