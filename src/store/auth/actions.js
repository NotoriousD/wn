export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (isAuth) => ({
  type: LOGIN_USER,
  payload: isAuth,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: {},
});
