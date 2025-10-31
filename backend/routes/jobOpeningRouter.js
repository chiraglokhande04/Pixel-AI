const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobOpeningController');

// Routes
router.post('/add', jobController.createJob);
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

module.exports = router;
