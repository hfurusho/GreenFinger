import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Welcome from "./pages/Welcome";
import Name from "./pages/Name";
import Location from "./pages/Location";
import Type from "./pages/Type";
import WaterSchedule from "./pages/WaterSchedule";
import Notes from "./pages/Notes";
import Table from "./pages/Table";
import PlantDetail from "./pages/PlantDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import authContext from "./authContext";
//import "./App.css";

function App() {
  const { dispatch, setCurrentUser, logoutUser } = useContext(authContext);

  useEffect(() => {
    // Check for token to keep user logged in
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);

      // Decode token and get user info and exp
      const decoded = jwt_decode(token);

      // Set user and isAuthenticated
      dispatch(setCurrentUser(decoded));

      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./login";
      }
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/name" component={Name} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/type" component={Type} />
          <Route exact path="/waterschedule" component={WaterSchedule} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/plants/:name" component={PlantDetail} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />

          <Route component={NoMatch} />
        </Switch>

        <Grid container justify="center">
          <Grid item>
            <Navbar />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
