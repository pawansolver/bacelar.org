const express = require('express');
const admissionController = require('../controllers/admissionController');
const validate = require('../middleware/validate');
const adminAuth = require('../middleware/adminAuth');
const { admissionSchema } = require('../validations/admissionValidation');

const router = express.Router();

// Public: Submit an admission enquiry
router.post('/', validate(admissionSchema), admissionController.createAdmission);

// Admin-only: Read operations (supports ?status= and ?grade= filters)
router.get('/', adminAuth, admissionController.listAdmissions);
router.get('/:id', adminAuth, admissionController.getAdmission);

// Admin-only: Update & Delete (full CRUD)
router.patch('/:id/status', adminAuth, admissionController.updateAdmissionStatus);
router.delete('/:id', adminAuth, admissionController.deleteAdmission);

module.exports = router;
