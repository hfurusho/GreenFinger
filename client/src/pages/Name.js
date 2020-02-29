import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default function Name() {
  // constructor(props) {
  //   super(props);
  //   // this.classes = this.useStyles();
  //   // This binding is necessary to make `this` work in the callback
  //   this.saveName = this.saveName.bind(this);
  //   this.state = {
  //     name: ""
  //   };
  //   this.updateInput = this.updateInput.bind(this);
  // }
  const [name, setName] = useState("");

  function updateInput(event) {
    setName(event.target.value)
  }

  function saveName() {
    // alert("saveName executed"); for testing
    //grab text from text field and store in local story
    // let name = this.state.name;
    // alert(name);
    localStorage.setItem("plantName",name);
  }

  
    return (
      <div style={{ textAlign: "center" }}>
        <h1>What's the name of your plant?</h1>

        <form>
          <TextField id="name-field" label="" onChange={updateInput} />
        </form>

        <Button href="Location" onClick={saveName} />
      </div>
    );
  }
