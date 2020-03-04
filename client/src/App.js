import React from "react";
import Grid from '@material-ui/core/Grid';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Name from "./pages/Name";
import Location from "./pages/Location";
import WaterSchedule from "./pages/WaterSchedule";
import Notes from "./pages/Notes";
import Table from "./pages/Table";
import PlantDetail from "./pages/PlantDetail";
import User from "./pages/User";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";

//import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/name" component={Name} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/waterschedule" component={WaterSchedule} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/plants/:name" component={PlantDetail} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/user" component={User} />

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
