import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    //make api request
    //on success, modify state
    //on failure, show message
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
  { isSignedIn: false }
);
