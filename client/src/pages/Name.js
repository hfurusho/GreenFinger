import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
// import { makeStyles } from "@material-ui/core/styles";

export default class Name extends Component {
  constructor(props) {
    super(props);
    // this.classes = this.useStyles();
    // This binding is necessary to make `this` work in the callback
    this.saveName = this.saveName.bind(this);
    this.state = {
      name: ""
    };
    this.updateInput = this.updateInput.bind(this);
  }

//   useStyles = makeStyles(theme => ({
//     root: {
//       "& > *": {
//         margin: theme.spacing(1),
//         width: 200
//       }
//     }
//   }));

  updateInput(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      event.preventDefault();
      this.saveName();
    }
  }

  handleClick(event) {
    this.saveName();
    event.preventDefault();
  }

  saveName() {
    let name = this.state.name;

    if(!name){
      alert('Please enter a name');
    } else {
      localStorage.setItem("plantName",name);
      window.location = 'Location';
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>What is the name of your plant?</h1>

        <form>
          <TextField 
          id="filled-basic" 
          label="ie succulent" 
          variant="filled" 
          onChange={this.updateInput} 
          onKeyPress={this.handleKeyPress.bind(this)}
          />
        </form>
        <br />

        <Button onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}
