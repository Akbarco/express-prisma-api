import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/product", productRoutes);

export default app;
