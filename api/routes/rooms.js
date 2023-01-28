//cookies. jwr web token etc.
import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", createRoom);

//update
router.put("/:id", updateRoom);

//delete
router.delete("/:id", deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/", getRooms);

export default router;
