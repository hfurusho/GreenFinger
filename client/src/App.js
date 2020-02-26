import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/Index';
import Name from './pages/Name';
import Location from './pages/Location';
import Notes from './pages/Notes';
//import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route exact path="/index" component={Index} />
        <Route exact path="/name" component={Name} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/notes" component={Notes} />


        
      </div>
    </BrowserRouter>
  );
}

export default App;
