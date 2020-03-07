import React from "react";
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

//import "./App.css";
import GlobalState from "./GlobalState";

function App() {
  return (
    <GlobalState>
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
    </GlobalState>
  );
}

export default App;
