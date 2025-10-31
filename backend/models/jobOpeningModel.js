// models/JobOpening.js

const mongoose = require('mongoose');

const jobOpeningSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ['Full-Time', 'Part-Time'],
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('JobOpening', jobOpeningSchema);
