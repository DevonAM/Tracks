const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Does not pass arrow function as callback because that would
//change context of "this" to this file.
//use keyword fucntion instead to make this refer to the user
userSchema.pre("save", function () {
  const user = this;
  //if user did not modify their password
  if (!user.isModified("password")) {
    //give up and carry on, do not salt
    return next();
  }
  //generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      //set the user password as the hash
      user.password = hash;
      //now continue
      next();
    });
  });
});

//automate password checking process
userSchema.methods.comparePassword = function (candidatePass) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePass, user.password, (err, isMatch) => {
      if (err) {
        reject(err);
      }

      if (!isMatch) {
        reject(false);
      }

      resolve(true);
    });
  });
};

mongoose.model("User", userSchema);
