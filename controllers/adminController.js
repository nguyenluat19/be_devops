const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Admin not found" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: admin._id, role: "admin" },
    process.env.JWT_SECRET
  );
  res.json({ token });
};
