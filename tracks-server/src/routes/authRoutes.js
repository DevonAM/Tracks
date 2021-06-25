const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Users = mongoose.model("User");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new Users({ email, password });

    await user.save();

    //create new token
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");

    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
