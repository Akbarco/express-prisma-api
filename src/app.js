import express from "express";
import dotenv from "dotenv";

// import semua route product
import productRoutes from "./routes/product.route.js";

// baca file .env
dotenv.config();

// bikin express app
const app = express();

// middleware agar bisa baca JSON dari body request
app.use(express.json());

// route test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// semua route product diawali /product
// contoh:
// GET /product
// GET /product/1
// POST /product
app.use("/product", productRoutes);

// export app supaya bisa dipakai server.js
export default app;
