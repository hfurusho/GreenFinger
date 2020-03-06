import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalState from "./GlobalState";

// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import { teal, orange } from "@material-ui/core/colors";

// const theme = createMuiTheme({
//   palette: {
//     primary: teal,
//     secondary: {
//       main: orange
//     }
//   }
// });
ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <App />,
//   </MuiThemeProvider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
