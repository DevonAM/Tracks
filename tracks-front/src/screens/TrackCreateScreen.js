import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  //only rebuild the callback if recording has changed
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forcedInset={{ top: "always" }}>
      <Text style={{ fontSize: 30 }}>Create A Track</Text>
      <Map />
      {err ? <Text>{err.message}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

//withNavigationFocus gives prop to TrackCreateScreen "isFocused"
export default withNavigationFocus(TrackCreateScreen);
