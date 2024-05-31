import express, { Router } from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from './routes/product.route.js'
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API");
});


mongoose
  .connect(
    "mongodb+srv://joerat1234:Password4MongoDB@node-api.qyj7yqt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Node-API"
  )
  .then(() => {
    console.log("You're connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
