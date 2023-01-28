//cookies. jwr web token etc.
import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import {  verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//check auth
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Logged in");
});
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("User you logged In");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin Logged in");
// });

//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/:id", getUser);

//get all
router.get("/", getUsers);

export default router;
