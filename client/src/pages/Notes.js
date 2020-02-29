import React, { Component } from "react";
import { TextField } from "@material-ui/core";
// import Multiline from "../components/Multiline";
import Button from "../components/SubmitBtn";

export default class Notes extends Component {
constructor(props) {
  super(props);
  this.saveNotes = this.saveNotes.bind(this);
    this.state = {
      name: ""
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      name: event.target.value
    });
  }

  saveNotes() {
    alert("saveNotes executed");
    //grab text from text field and store in local story
    let notes = this.state.notes;
    alert(notes);
    localStorage.setItem("plantNotes",notes);
  }

  render(){
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Additional Notes?</h1>
        <form>
          <TextField id="name-field" label="" onChange={this.updateInput} />
        </form>
        {/* <Multiline /> */}
        <br />
  
        <Button href="Table" onClick={this.saveNotes} />
        {/* read all local storage values
        end to MongoDB
        clear local storage to blank: plantName="" */}
  
      </div>
    );
  }
  
}