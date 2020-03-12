import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Aloe from "../assets/aloe.png";

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
    marginTop: theme.spacing(4)
  },
  error: {
    color: "red"
  }
}));

export default function Location(props) {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  function updateInput(event) {
    setLocation(event.target.value);
  }

  function saveLocation() {
    if (location.length !== 0) {
      localStorage.setItem("plantLocation", location);
      props.history.push("Type");
    } else {
      setError("Please enter a location");
    }
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>Where's the location of this plant?</h2>

        <TextField
          className={classes.input}
          id="filled-basic"
          placeholder="i.e. livingroom"
          style={{ backgroundColor: "#e0f2f1" }}
          label=""
          variant="filled"
          onChange={updateInput}
        />
        <span className={classes.error}>{error}</span>
        <Button className={classes.btn} onClick={saveLocation} />

        <img
          className={classes.img}
          src={Aloe}
          style={{ width: 100 }}
          alt="aloe"
        />
      </div>
    </Container>
  );
}
