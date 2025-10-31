const User = require("../models/userModel");
 const changeUserRole = async (req, res) => {
  const { userId, newRole } = req.body;

  // Check if requester is admin
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  if (!["student", "instructor", "admin"].includes(newRole)) {
    return res.status(400).json({ message: "Invalid role provided." });
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.role = newRole;
    await user.save();

    res.status(200).json({ message: `User promoted to ${newRole}`, user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


module.exports = {changeUserRole};