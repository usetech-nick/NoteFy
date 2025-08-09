const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const rootRouter = require("./routes/authRoutes");
app.use(cors);

app.get("/", (req, res) => {
  res.send("🟢 Notes App API is running!");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
