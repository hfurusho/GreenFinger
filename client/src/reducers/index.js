import authReducers from "./authReducers";
import errorReducers from "./errorReducers";

export default function rootReducer(state, action) {
  const { auth, error } = state;

  return {
    auth: authReducers(auth, action),
    error: errorReducers(error, action)
  };
}
