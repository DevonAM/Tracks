import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
          console.log(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forcedInset={{ top: "always" }}>
      <Text style={{ fontSize: 30 }}>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>{err.message}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
