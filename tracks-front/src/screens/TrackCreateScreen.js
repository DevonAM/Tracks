import "../_mockLocation";
import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocation from "../hooks/useLocation";

import { Context as LocationContext } from "../context/LocationContext";
const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

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
