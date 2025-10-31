const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const blogController = require('../controllers/blogController');

// Expecting mainImage and contentImg files
const multipleUpload = upload.fields([
  { name: 'mainImage', maxCount: 1 },
  // Accept dynamic content images
  { name: 'contentImg_0' },
  { name: 'contentImg_1' },
  { name: 'contentImg_2' },
  // Extend as needed...
]);

router.post('/add', multipleUpload, blogController.createBlog);
router.patch('/:id', multipleUpload, blogController.editBlog);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
