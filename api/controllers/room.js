import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

//create rooms
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Room.findByIdAndUpdate(RoomId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

//update
export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  };
  
  //delete
  export const deleteRoom = async (req, res, next) => {
    try {
      await Room.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted");
    } catch (err) {
      next(err);
    }
  };
  //get Room
  export const getRoom = async (req, res, next) => {
    try {
      const rooms = await Room.findById(req.params.id);
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };
  
  //get all Room
  export const getRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };
  
