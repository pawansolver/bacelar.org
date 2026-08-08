const path   = require('path');
const fs     = require('fs');
const multer = require('multer');

const UPLOAD_DIR = path.join(__dirname, '..', 'data', 'uploads', 'gallery');

// Ensure upload directory exists on startup
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const ALLOWED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE_MB  = 5;

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename(_req, file, cb) {
    const ext       = path.extname(file.originalname).toLowerCase() || '.jpg';
    const timestamp = Date.now();
    const random    = Math.random().toString(36).slice(2, 8);
    cb(null, `gallery_${timestamp}_${random}${ext}`);
  },
});

function fileFilter(_req, file, cb) {
  if (ALLOWED_MIME.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      Object.assign(new Error('Only JPEG, PNG, WebP, and GIF images are allowed.'), {
        statusCode: 422,
      }),
      false
    );
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_SIZE_MB * 1024 * 1024 },
});

/**
 * Delete a file from the gallery uploads directory (best-effort)
 * @param {string} imagePath  - value stored in DB, e.g. "/uploads/gallery/gallery_xxx.jpg"
 */
function deleteUploadedFile(imagePath) {
  if (!imagePath) return;
  const rel  = imagePath.replace(/^\/uploads\/gallery\//, '');
  const full = path.join(UPLOAD_DIR, rel);
  try {
    if (fs.existsSync(full)) fs.unlinkSync(full);
  } catch (err) {
    console.warn('[gallery] Could not delete file:', full, err.message);
  }
}

module.exports = { upload, deleteUploadedFile, UPLOAD_DIR };
