const express = require("express");
const app = express();

const contactRoute = require("./routes/Contact");

const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5173/"],
    credentials: true,
  })
);

app.use("/api/v1/reach", contactRoute);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
