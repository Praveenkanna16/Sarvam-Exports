// middleware/uploadMiddleware.js
const multer = require('multer');

// We use memoryStorage to temporarily hold the file in memory
// before we upload it to Cloudinary. This is more efficient than saving it to disk first.
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB file size limit
  },
  fileFilter: (req, file, cb) => {
    // Only allow image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload only images.'), false);
    }
  }
});

module.exports = upload;