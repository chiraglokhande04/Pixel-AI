// controllers/callbackController.js
const Callback = require('../models/callbackModel');

/**
 * Create a new callback request
 */
exports.createCallback = async (req, res) => {
  try {
    const { fullName, workEmail, companyName, country, message } = req.body;

    const callback = await Callback.create({
      fullName,
      workEmail,
      companyName,
      country,
      message
    });

    return res.status(201).json({
      success: true,
      data: callback
    });
  } catch (err) {
    console.error('createCallback error:', err);

    // If validation error from mongoose
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, errors });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * Get all callback requests (paginated)
 */
exports.getCallbacks = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
    const skip = (page - 1) * limit;

    const [total, callbacks] = await Promise.all([
      Callback.countDocuments(),
      Callback.find().sort({ createdAt: -1 }).skip(skip).limit(limit)
    ]);

    return res.status(200).json({
      success: true,
      meta: {
        total,
        page,
        limit
      },
      data: callbacks
    });
  } catch (err) {
    console.error('getCallbacks error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.updateCallback = async (req, res) => {
  try {
    const callback = await Callback.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!callback) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    return res.status(200).json({ success: true, data: callback });
  } catch (err) {
    console.error('updateCallback error:', err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.deleteCallback = async (req, res) => {
  try {
    const callback = await Callback.findByIdAndDelete(req.params.id);

    if (!callback) {
      return res.status(404).json({ success: false, message: "Not found" });
    }

    return res.status(200).json({ success: true, message: "Deleted" });
  } catch (err) {
    console.error('deleteCallback error:', err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

