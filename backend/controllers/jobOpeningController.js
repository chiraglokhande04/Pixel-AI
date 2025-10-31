const JobOpening = require('../models/jobOpeningModel');

// Create a new job opening
exports.createJob = async (req, res) => {
  try {
    const newJob = new JobOpening(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job openings
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await JobOpening.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single job opening by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await JobOpening.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a job opening
exports.updateJob = async (req, res) => {
  try {
    const updatedJob = await JobOpening.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedJob) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job opening
exports.deleteJob = async (req, res) => {
  try {
    const deletedJob = await JobOpening.findByIdAndDelete(req.params.id);
    if (!deletedJob) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
