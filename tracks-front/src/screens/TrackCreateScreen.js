import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forcedInset={{ top: "always" }}>
      <Text style={{ fontSize: 30 }}>TrackCreateScreen</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
