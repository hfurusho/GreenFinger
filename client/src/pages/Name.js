import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Cactus from "../assets/cactus1.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  input: {
    marginTop: theme.spacing(4)
  },
  btn: {
    marginTop: theme.spacing(4)
  },
  img: {
    marginTop: theme.spacing(2)
  },
  error: {
    color: "red"
  }
}));

export default function Name(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const classes = useStyles();

  function updateInput(event) {
    setName(event.target.value);
  }

  function saveName() {
    if (name.trim().length !== 0) {
      localStorage.setItem("plantName", name);
      props.history.push("Location");
    } else {
      setError("Please enter a plant pet name");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>What's the pet name of your plant?</h2>
        <TextField
          className={classes.input}
          id="filled-basic"
          placeholder="i.e. Harry the cactus"
          style={{ backgroundColor: "#e0f2f1" }}
          label=""
          variant="filled"
          onChange={updateInput}
          required
        />
        <span className={classes.error}>{error}</span>

        <Button onClick={saveName} />
        <img
          className={classes.img}
          src={Cactus}
          style={{ width: 90 }}
          alt="cactus"
        />
      </div>
    </Container>
  );
}
