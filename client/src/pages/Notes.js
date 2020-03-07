import React, { useState, useContext, useEffect } from "react";
import API from "../utils/API";
import { TextField } from "@material-ui/core";
import Button from "../components/SubmitBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Monstera from "../assets/monstera.png";

import authContext from "../authContext";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(6)
  }
}));

export default function Notes(props) {
  const [notes, setNotes] = useState("");
  const {
    user: { id: userId }
  } = useContext(authContext);

  async function handleDataSubmit(plantObject) {
    console.log("API.savePlant FIRED");
    console.log("API", plantObject);
    await API.createAndSave(
      {
        plantName: plantObject.plantName,
        plantLocation: plantObject.plantLocation,
        plantType: plantObject.plantType,
        plantStartDate: plantObject.plantStartDate,
        plantPeriod: plantObject.plantPeriod,
        plantTime: plantObject.plantTime,
        plantNotes: plantObject.plantNotes,
        plantImage: plantObject.plantImage
      },
      userId
    );

    props.history.push("Table");
  }

  //functions for notes -------------------
  function updateInput(event) {
    setNotes(event.target.value);
  }

  function saveNotes(event) {
    event.preventDefault();
    localStorage.setItem("plantNotes", notes);

    //read all local storage values, put into an object
    let plantObject;
    plantObject = {
      plantName: localStorage.getItem("plantName"),
      plantLocation: localStorage.getItem("plantLocation"),
      plantType: localStorage.getItem("plantType"),
      plantStartDate: localStorage.getItem("plantStartDate"),
      plantTime: localStorage.getItem("plantTime"),
      plantPeriod: localStorage.getItem("plantPeriod"),
      plantNotes: localStorage.getItem("plantNotes"),
      plantImage: localStorage.getItem("plantImage")
    };
    console.log("localStorage", plantObject);

    //send to MongoDB as object;
    handleDataSubmit(plantObject);

    //clear local storage to blank
    localStorage.removeItem("plantName");
    localStorage.removeItem("plantLocation");
    localStorage.removeItem("plantType");
    localStorage.removeItem("plantStartDate");
    localStorage.removeItem("plantTime");
    localStorage.removeItem("plantPeriod");
    localStorage.removeItem("plantNotes");
    localStorage.removeItem("plantImage");
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>Additional Notes?</h2>

        <TextField
          className={classes.input}
          id="name-field"
          placeholder="i.e. Indirect sunlight"
          label=""
          variant="filled"
          value={notes}
          onChange={updateInput}
        />

        <Button className={classes.btn} onClick={saveNotes} />
        <img
          className={classes.img}
          src={Monstera}
          style={{ width: 120 }}
          alt="monstera"
        />
      </div>
    </Container>
  );
}

// Deletes a plant from the database with a given id, then reloads plants from the db
// function deletePlant(id) {
//   API.deletePlant(id)
//     .then(res => loadPlants())
//     .catch(err => console.log(err));
// }
// Loads all plants and sets them to plantObject
// function loadPlants() {
//   API.getPlants()
//     .then(res => setPlantObject(res.data))
//     .catch(err => console.log(err));
// }

//for testing with backend, add useEffect in line 1
// useEffect(() => {
//   const plantData = {
//     name: "cactus",
//     location: "kitchen",
//     startDate: "1992-10-16",
//     period: 40,
//     waterTime: "1992-10-16",
//     notes: "no light"
//   };
//    API.savePlant(plantData);
// }, []);

// next steps:
//   1. read all local storage values;
//   2. send to MongoDB as object;
//   3. clear local storage to blank: plantName="" ;
// button click -> saveNote -> handleDataSubmit() to Mongo
