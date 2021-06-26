const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization === "Bearer slkdjflskdjfllkdjfldkjfdl"

  //check if Authorization was provided in header
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in" });
  }

  //extract the jwt
  const token = authorization.replace("Bearer ", "");

  //verify the token
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in" });
    }

    //extract the userId from the payload
    const { userId } = payload;

    //get the user from mongo
    const user = await User.findById(userId);

    req.user = user;

    next();
  });
};
