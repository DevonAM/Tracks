const express = require("express");
const mongoose = require("mongoose");

const Users = mongoose.model("User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new Users({ email, password });
    await user.save();
  } catch (err) {
    return res.status(422).send(err.message);
  }
  res.send("Sent a signup post");
});

module.exports = router;
