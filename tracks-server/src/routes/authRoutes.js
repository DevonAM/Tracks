const express = require("express");
const mongoose = require("mongoose");

const Users = mongoose.model("User");
const router = express.Router();

router.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("Sent a signup post");
});

module.exports = router;
