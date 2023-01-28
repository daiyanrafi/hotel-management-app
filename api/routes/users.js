//cookies. jwr web token etc.
import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import {  verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//check auth
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("User you logged In");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin Logged in");
// });

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getUsers);

export default router;
