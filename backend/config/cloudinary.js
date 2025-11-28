const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your Cloudinary credentials
cloudinary.config({
  cloud_name: 'dpzr56zqi',
  api_key: '598983512763746',
  api_secret: 'nuVX7WpJaDN7Xj1LQ99yZTnEj7A',
});

module.exports = cloudinary;
