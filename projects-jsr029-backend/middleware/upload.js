const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

// Ensure the upload directory exists to prevent multer from throwing errors
const uploadDir = path.join(__dirname, '../images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Use original extension to maintain file type integrity
        const ext = path.extname(file.originalname);
        cb(null, `${uuidv4()}${ext}`);
    }
});

const upload = multer({ 
    storage,
    // Basic security: limit file size to prevent DOS (e.g., 5MB)
    limits: { fileSize: 5 * 1024 * 1024 } 
});

module.exports = upload;