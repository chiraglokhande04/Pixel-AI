// routes/callbackRoutes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/callbackController');

// Validation middleware for creating callback
const createValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 100 }),
  body('workEmail').trim().notEmpty().withMessage('Work email is required')
    .isEmail().withMessage('Invalid email').isLength({ max: 100 }),
  body('companyName').optional().isLength({ max: 150 }),
  body('country').optional().isLength({ max: 100 }),
  body('message').optional().isLength({ max: 2000 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return first-level friendly list of errors
      return res.status(400).json({ success: false, errors: errors.array().map(e => e.msg) });
    }
    next();
  }
];

// POST /api/callbacks   -> create a callback
router.post('/', createValidation, controller.createCallback);

// GET /api/callbacks    -> list callbacks (paginated)
router.get('/', controller.getCallbacks);

router.patch('/:id', controller.updateCallback);
router.delete('/:id', controller.deleteCallback);

module.exports = router;
