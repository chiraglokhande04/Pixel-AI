const mongoose = require('mongoose');

const contentSectionSchema = new mongoose.Schema({
  subHeading: {
    type: String,
    required: true
  },
  img: {
    type: String // Optional image
  },
  paragraph: {
    type: [String] // Optional multiple paragraphs
  }
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  mainImage: {
    type: String,
    required: true
  },
  content: {
    type: [contentSectionSchema],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Blog', blogSchema);
