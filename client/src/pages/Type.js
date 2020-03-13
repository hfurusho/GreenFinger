import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Cactus2 from "../assets/cactus2.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  input: {
    marginTop: theme.spacing(8)
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

export default function Type(props) {
  const [type, setType] = useState("");
  const [errors, setErrors] = useState("");

  function updateInput(event) {
    setType(event.target.value);
  }

  function saveType() {
    if (type.length !== 0) {
      console.log("saveType fired");
      localStorage.setItem("plantType", type); //where is type defined?

      searchImage(type);
    } else {
      setErrors("Please enter a plant type");
    }
  }

  function searchImage(type) {
    const queryUrl = `https://pixabay.com/api/?key=15485203-cba91f318bb796f35c4848942&q=${type}&image_type=photo&pretty=true`;

    fetch(queryUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const imageUrl =
          data.hits[0].webformatURL ||
          "https://pixabay.com/get/52e6d14b4c53ad14f6da8c7dda79367b1137dbe753526c48702778d09044c150bd_640.jpg";

        localStorage.setItem("plantImage", imageUrl);
      })
      .then(() => props.history.push("WaterSchedule"))
      .catch(err => {
        if (err) throw err;
      });
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>What's the type of this plant?</h2>

        <TextField
          className={classes.input}
          id="name-field"
          placeholder="i.e. monstera"
          style={{ backgroundColor: "#e0f2f1" }}
          label=""
          variant="filled"
          onChange={updateInput}
        />
        <span className={classes.error}>{errors}</span>
        <Button className={classes.btn} onClick={saveType} />

        <img
          className={classes.img}
          src={Cactus2}
          style={{ width: 100 }}
          alt="cactus2"
        />
      </div>
    </Container>
  );
}

// effect functions can't be async, so declare the async function inside the effect, then call it
