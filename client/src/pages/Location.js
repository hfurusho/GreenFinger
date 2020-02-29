import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default class Location extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.saveLocation = this.saveLocation.bind(this);
    this.state = {
      location: ""
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      location: event.target.value
    });
  }

  saveLocation() {
    alert("saveName executed");
    let location = this.state.location;
    alert(location);
    localStorage.setItem("plantLocation", location);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Where is the location of this plant?</h1>

        <form>
          <TextField id="name-field" label="" onChange={this.updateInput} />
        </form>
        <br />

        <Button href="WaterSchedule" onClick={this.saveLocation}/>
      </div>
    );
  }
}
