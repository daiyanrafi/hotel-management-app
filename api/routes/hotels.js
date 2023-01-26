//cookies. jwr web token etc.
import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
  //here Hotel is our model, we taking datas from user = new Hotel and creating data
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update
//delete
//get
//get all

export default router;
