import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return () => {};
};
const saveTracks = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, saveTracks },
  []
);
