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
    marginTop: theme.spacing(4)
  }
}));

export default function Name(props) {
  const [name, setName] = useState("");

  const classes = useStyles();

  function updateInput(event) {
    setName(event.target.value);
  }

  function saveName() {
    localStorage.setItem("plantName", name);
    props.history.push("Location");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>What's the pet name of your plant?</h2>

        <TextField
          className={classes.input}
          id="filled-basic"
<<<<<<< HEAD
          placeholder="i.e. harry"
=======
          placeholder="i.e. Harry the cactus"
          style={{backgroundColor: "#e0f2f1"}}
>>>>>>> d9174bc0b22d8c720e8fa94f93dff9ce1cb11f71
          label=""
          variant="filled"
          onChange={updateInput}
          required
        />
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