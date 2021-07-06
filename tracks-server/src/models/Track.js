const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});
const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //references mongoose.model("User", userSchema);
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

//point objects embeded in trackSChema, so we do
//not tie them into our mongoose models
//only want a collection of track objects.
mongoose.model("Track", trackSchema);
