const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const authRoutes = require("./router/authRouter");
const categoryRoutes = require("./router/categoryRouter");
const productRoutes = require("./router/productRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

// Auth Route
app.use("/api/auth", authRoutes);

// Category Route
app.use("/api/category", categoryRoutes);

// Product Route
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
