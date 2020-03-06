import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Aloe from "../assets/aloe.png";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
}));

export default function Location() {
  const [location, setLocation] = useState("");

  function updateInput(event) {
    setLocation(event.target.value);
  }

  function saveLocation() {
    localStorage.setItem("plantLocation", location);
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>Where's the location of this plant?</h2>

        <form>
          <TextField
            id="filled-basic"
            placeholder="i.e. livingroom"
            label=""
            variant="filled"
            onChange={updateInput}
          />
        </form>

        <Button href="Type" onClick={saveLocation} />
        <img src={Aloe} style={{ width: 130 }} alt="" />

      </div>
    </Container>
  );
}
