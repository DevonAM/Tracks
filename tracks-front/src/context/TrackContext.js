import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return () => {};
};
const createTrack = (dispatch) => {
  return async (name, locations) => {
    await trackerAPI.post("/tracks", { name, locations });
  };
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);