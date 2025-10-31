const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String, // You can add regex validation for URL if needed
    
  },
  viewLink: {
    type: String,
  }
});

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
    trim: true
  },
  features: {
    type: [String],
    default: []
  },
  projects: {
    type: [projectSchema],
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
