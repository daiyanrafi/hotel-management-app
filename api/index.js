import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
// const express = require("express");

const app = express();
dotenv.config();

//mongoose frm document
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB - FUNCTION.");
  } catch (error) {
    throw error;
  }
};

//autometic db ONLINE connect error msg bt listiners
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected - ONLINE");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected - ONLINE");
});

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
  connect();
  console.log("connected BACKEND to 8800");
});
