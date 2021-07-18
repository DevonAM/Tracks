import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
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
      {err ? <Text>{err}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
