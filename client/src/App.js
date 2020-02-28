import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Name from "./pages/Name";
import Location from "./pages/Location";
import WaterSchedule from "./pages/WaterSchedule";
import Notes from "./pages/Notes";
import Table from "./pages/Table";
import PlantDetail from "./pages/PlantDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NoMatch from "./pages/NoMatch";

//import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/name" component={Name} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/waterschedule" component={WaterSchedule} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/plants/:id" component={PlantDetail} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NoMatch} />
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
