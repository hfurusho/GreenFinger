import React from "react";
import rootReducer from "./reducers";

const GlobalStore = React.createContext();

const asyncer = (dispatch, state) => action =>
  typeof action === "function" ? action(dispatch, state) : dispatch(action);

const Provider = ({ children }) => {
  const [state, dispatchBase] = React.useReducer(rootReducer, {
    isAuthenticated: false,
    user: {},
    loading: false,
    errors: {}
  });

  console.log(state);

  const dispatch = React.useCallback(asyncer(dispatchBase, state), []);

  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStore.Provider>
  );
};

const useGlobalStore = () => {
  React.useContext(GlobalStore);
};

export { Provider, useGlobalStore };
