const express              = require('express');
const adminAuth            = require('../middleware/adminAuth');
const announcementController = require('../controllers/announcementController');

const router = express.Router();

// ─── Public ───────────────────────────────────────────────────────────────────
// GET /api/announcements/active  — live banner feed (scheduling-aware)
router.get('/active', announcementController.getActive);

// ─── Admin ────────────────────────────────────────────────────────────────────
// PATCH /api/announcements/reorder  — must be above /:id if added later
// GET   /api/announcements          — full list with filters
// GET   /api/announcements/:id      — single item
// POST  /api/announcements          — create
// PATCH /api/announcements/:id      — update
// PATCH /api/announcements/:id/toggle — toggle active
// DELETE /api/announcements/:id     — hard delete

router.get('/',                adminAuth, announcementController.listAnnouncements);
router.get('/:id',             adminAuth, announcementController.getAnnouncement);
router.post('/',               adminAuth, announcementController.createAnnouncement);
router.patch('/:id',           adminAuth, announcementController.updateAnnouncement);
router.patch('/:id/toggle',    adminAuth, announcementController.toggleAnnouncement);
router.delete('/:id',          adminAuth, announcementController.deleteAnnouncement);

module.exports = router;
