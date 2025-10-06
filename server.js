const mongoose = require("mongoose");
require("dotenv").config();

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ MongoDB connected");

    const express = require("express");
    const app = express();
    const cors = require("cors");

    app.use(cors());
    app.use(express.json());

    // Your routes here
    app.use("/api/admin", require("./routes/adminRoutes"));
    app.use("/api/books", require("./routes/bookRoutes"));
    app.use("/api/users", require("./routes/userRoutes"));
    app.use("/api/auth", require("./routes/userRoutes"));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

startServer();
