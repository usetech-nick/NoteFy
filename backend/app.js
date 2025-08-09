require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/api/v1/auth", authRoutes);

const noteRoutes = require("./routes/noteRoutes");
app.use("/api/v1/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("🟢 Notes App API is running!");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
