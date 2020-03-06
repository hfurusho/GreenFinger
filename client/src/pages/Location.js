import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

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
        <h1>Where's the location of this plant?</h1>

        <form>
          <TextField
            id="name-field"
            placeholder="livingroom"
            label=""
            onChange={updateInput}
          />
        </form>

        <Button href="Type" onClick={saveLocation} />
      </div>
    </Container>
  );
}
