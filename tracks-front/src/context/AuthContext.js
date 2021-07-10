import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "add_error",
        payload: "There was an error when signing up",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //make api request
    //onsuccess modify state
    //on failure show message
  };
};

const signout = (dispatch) => {
  //somehow signout
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
