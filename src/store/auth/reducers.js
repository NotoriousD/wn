import { LOGIN_USER, LOGOUT_USER } from "./actions";

let lsUser = localStorage.getItem("user") || "";

let defaultAuth = {
  currentUser: {},
};

if (lsUser !== "") {
  let creds = JSON.parse(localStorage.getItem("user"));
  defaultAuth = {
    currentUser: {
      email: creds.email,
      name: creds.name,
      token: creds.token,
    },
  };
}

export const authReducers = (state = defaultAuth, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
