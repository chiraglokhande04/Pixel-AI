const Blog = require('../models/blogModel');
const fs = require('fs');

// Create Blog
// const createBlog = async (req, res) => {
//   try {
//     const { title, content } = req.body;

//     // Parse content (if sent as JSON string from form-data)
//     let parsedContent;

//     try {
//       // If content is string, parse it to JSON array
//       parsedContent = typeof req.body.content === 'string'
//         ? JSON.parse(req.body.content)
//         : req.body.content; // if it's already parsed, use directly
//     } catch (error) {
//       return res.status(400).json({ success: false, message: 'Invalid JSON in content field' });
//     }
    
//     // Now check if parsedContent is an array
//     if (!Array.isArray(parsedContent)) {
//       return res.status(400).json({ success: false, message: 'Content should be an array' });
//     }
    
//     // Process optional sub-content images
//     const mainImageFile = req.files.find(f => f.fieldname === 'mainImage');
//     const contentWithImages = parsedContent.map((item, index) => {
//         const contentImageFile = req.files.find(f => f.fieldname === `contentImg_${index}`);
//         return {
//           subHeading: item.subHeading,
//           paragraph: item.paragraph,
//           img: contentImageFile?.path || item.img // fallback if no new image
//         };
//       });
//     const blog = new Blog({
//       title,
//       mainImage: mainImageFile?.path,// multer stores this under field name
//       content: contentWithImages
//     });

//     await blog.save();
//     res.status(201).json({ success: true, data: blog });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };



const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    // ✅ Parse content safely
    let parsedContent;
    try {
      parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
    } catch (error) {
      return res.status(400).json({ success: false, message: 'Invalid JSON in content field' });
    }

    // ✅ Validate that content is an array
    if (!Array.isArray(parsedContent)) {
      return res.status(400).json({ success: false, message: 'Content should be an array' });
    }

    // ✅ Extract mainImage
    const mainImageFile = req.files?.mainImage?.[0]; // changed to support `upload.fields`

    // ✅ Build content array with optional images
    const contentWithImages = parsedContent.map((item, index) => {
      const contentImageFile = req.files?.[`contentImg_${index}`]?.[0];
      return {
        subHeading: item.subHeading,
        paragraph: item.paragraph,
        img: contentImageFile?.path || null // store file path or null
      };
    });

    // ✅ Create and save blog
    const blog = new Blog({
      title,
      mainImage: mainImageFile?.path || null,
      content: contentWithImages
    });

    await blog.save();

    return res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error("❌ Error creating blog:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createBlog };

// Edit Blog
// const editBlog = async (req, res) => {
//   try {
//     const { title, content } = req.body;
//     const blogId = req.params.id;

//     const blog = await Blog.findById(blogId);
//     if (!blog) return res.status(404).json({ message: 'Blog not found' });

//     // Update title
//     if (title) blog.title = title;

//     // Update mainImage if new one uploaded
//     const mainImageFile = req.files.find(f => f.fieldname === 'mainImage');
//     if (mainImageFile) {
//       blog.mainImage = mainImageFile.path; // Cloudinary URL
//     }

//     // Parse new content
//     const parsedContent = JSON.parse(content); // should be a JSON string

//     // Rebuild content array with new image URLs where available
//     blog.content = parsedContent.map((item, index) => {
//       const contentImgFile = req.files.find(f => f.fieldname === `contentImg_${index}`);
//       return {
//         subHeading: item.subHeading,
//         paragraph: item.paragraph,
//         img: contentImgFile ? contentImgFile.path : item.img // keep existing img if not replaced
//       };
//     });

//     const updatedBlog = await blog.save();
//     res.status(200).json({ success: true, data: updatedBlog });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

const editBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blogId = req.params.id;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Update title if provided
    if (title) blog.title = title;

    // Handle files safely
    const files = Array.isArray(req.files) ? req.files : [];

    // Update mainImage if new one uploaded
    const mainImageFile = files.find(f => f.fieldname === 'mainImage');
    if (mainImageFile) {
      blog.mainImage = mainImageFile.path;
    }

    // Parse content safely
    let parsedContent;
    try {
      parsedContent = typeof content === "string" ? JSON.parse(content) : content;
    } catch (e) {
      return res.status(400).json({ success: false, message: "Invalid content format" });
    }

    // Rebuild content array
    blog.content = parsedContent.map((item, index) => {
      const contentImgFile = files.find(f => f.fieldname === `contentImg_${index}`);
      return {
        subHeading: item.subHeading,
        paragraph: item.paragraph,
        img: contentImgFile ? contentImgFile.path : item.img
      };
    });

    const updatedBlog = await blog.save();
    res.status(200).json({ success: true, data: updatedBlog });

  } catch (error) {
    console.error("❌ Blog update failed:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

  

// Get All Blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Single Blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({
      message: 'Blog deleted successfully',
      data: deletedBlog
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBlog,
  editBlog,
  getAllBlogs,
  getBlogById,
  deleteBlog
};
