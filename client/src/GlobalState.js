import React, { useReducer } from "react";
import authReducers from "./reducers/authReducers";
import AuthContext from "./authContext";
import axios from "axios";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./actions/types";

const GlobalState = props => {
  const [authState, dispatch] = useReducer(authReducers, {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {}
  });

  const registerUser = (userData, history) => {
    axios
      .post("/api/users/register", userData)
      .then(res => history.push("/SignIn")) // re-direct to login on successful register
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  // Login - get user token
  const loginUser = userData => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
        // Save to localStorage

        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);

        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);

        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  // Set logged in user
  const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };

  // User loading
  const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };

  // Log user out
  const logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");

    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        loading: authState.loading,
        errors: authState.errors,
        registerUser: registerUser,
        loginUser: loginUser,
        setCurrentUser: setCurrentUser,
        setUserLoading: setUserLoading,
        logoutUser: logoutUser,
        dispatch
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default GlobalState;
