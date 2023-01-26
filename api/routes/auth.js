//cookies. jwr web token etc.
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello, this is check");
});

export default router;
