import * as Location from "expo-location";

/**
 * This is a test file that mimics locations
 */
const tenMetersWithDegress = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude:
        39.54386835921513 +
        increment * tenMetersWithDegress +
        Math.random() * 0.0001,
      longitude: -106.41049244451001 + increment * tenMetersWithDegress,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
