import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Cactus from "../assets/cactus1.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  input:{
    marginTop: theme.spacing(4)
  },
  btn:{
    marginTop: theme.spacing(4)
  },
  img:{
    marginTop: theme.spacing(4)
  }
}));

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

  const classes = useStyles();

  function updateInput(event) {
    setName(event.target.value);
  }

  function saveName() {
    // alert("saveName executed"); for testing
    //grab text from text field and store in local story
    // let name = this.state.name;
    // alert(name);
    localStorage.setItem("plantName", name);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>What's the name of your plant?</h2>

        <TextField className={classes.input}
          id="filled-basic"
          placeholder="i.e. cactus"
          label=""
          variant="filled"
          onChange={updateInput}
        />

        <Button className={classes.btn} href="Location" onClick={saveName} />

        <img className={classes.img} src={Cactus} style={{ width: 90 }} alt="cactus" />
      </div>
    </Container>
  );
}
