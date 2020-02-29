import React, { Component } from "react";
// import BasicTextField from "../components/TextField";
import Button from "../components/ContinueBtn";
import { TextField } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

export default class Name extends Component {
  constructor(props) {
    super(props);
    // this.classes = this.useStyles();
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
  saveName() {
    alert("saveName executed");
    //grab text from text field and store in local story
    var name = this.state.name;
    // alert(name);
    localStorage.setItem("plantName",name);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>What's the name of your plant?</h1>

        <form>
          <TextField id="name-field" label="" onChange={this.updateInput} />
        </form>
        <br />

        <Button href="Location" onClick={this.saveName} />
      </div>
    );
  }
}
