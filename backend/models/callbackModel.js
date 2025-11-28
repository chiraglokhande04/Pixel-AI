// models/Callback.js
const mongoose = require('mongoose');

const callbackSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: 100
  },
  workEmail: {
    type: String,
    required: [true, 'Work email is required'],
    trim: true,
    lowercase: true,
    maxlength: 100,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  companyName: {
    type: String,
    trim: true,
    maxlength: 150,
    default: ''
  },
  country: {
    type: String,
    trim: true,
    maxlength: 100,
    default: ''
  },
  message: {
    type: String,
    trim: true,
    maxlength: 2000,
    default: ''
  },
    contacted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Callback', callbackSchema);
