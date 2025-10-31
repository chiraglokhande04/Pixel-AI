const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'djqjhgml1',
  api_key: '821112255447366',
  api_secret: 'leiOuCrU9ceOA205-Z6AvLGUTxk',
});

// Multer-Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const folderMap = {
      img: 'courses/images',
      brochure: 'courses/brochures',
      certificate: 'courses/certificates',
      instructorImg: 'instructors/images',
      mainImage: 'blogs/main',
      // Dynamically route content images to a folder
      default: 'blogs/content'
    };

    const ext = path.extname(file.originalname).toLowerCase();
    const resourceType = ext === '.pdf' ? 'raw' : 'image';

    return {
      folder: folderMap[file.fieldname] || folderMap.default,
      resource_type: resourceType,
      allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'],
      public_id: `${file.fieldname}-${Date.now()}`,
    };
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|jpg|jpeg|png/;
  const ext = path.extname(file.originalname).toLowerCase().substring(1);
  if (allowedTypes.test(ext)) cb(null, true);
  else cb(new Error('Only PDF, JPG, JPEG, PNG allowed'), false);
};

// Final multer upload setup
const upload = multer({ storage, fileFilter });

module.exports = upload;
