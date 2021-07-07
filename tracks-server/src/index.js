const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./models/Track");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.9wlkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
