import React from "react";

export default React.createContext({
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: {},
  registerUser: (userData, history) => {},
  loginUser: userData => {},
  setCurrentUser: decoded => {},
  setUserLoading: () => {},
  logoutUser: () => {}
});
