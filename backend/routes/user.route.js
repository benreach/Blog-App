import express from "express";
import User from "../models/user.model.js"

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await User.find();
  res.status(200).send(posts);
});


export default router;
