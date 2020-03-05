import React, { useState } from "react";
import API from "../utils/API";
import { TextField } from "@material-ui/core";
import Button from "../components/SubmitBtn";
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

export default function Notes() {
  const [notes, setNotes] = useState("");

  function handleDataSubmit(plantObject) {
    console.log("API.savePlant FIRED")
    console.log("API", plantObject);

    API.savePlant({
      name: plantObject.name,
      location: plantObject.location,
      type: plantObject.type,
      date: plantObject.date,
      period: plantObject.period,
      time: plantObject.time,
      notes: plantObject.notes,
      image: plantObject.image
    })
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
      name: localStorage.getItem("plantName"),
      location: localStorage.getItem("plantLocation"),
      type: localStorage.getItem("plantType"),
      date: localStorage.getItem("date"),
      time: localStorage.getItem("time"),
      period: localStorage.getItem("period"),
      notes: localStorage.getItem("plantNotes"),
      image: localStorage.getItem("image")
    };
    console.log("localStorage", plantObject);

    //send to MongoDB as object;
    handleDataSubmit(plantObject);

    //clear local storage to blank
    localStorage.setItem("plantName", "");
    localStorage.setItem("plantLocation", "");
    localStorage.setItem("plantType", "");
    localStorage.setItem("date", "");
    localStorage.setItem("time", "");
    localStorage.setItem("period", "");
    localStorage.setItem("plantNotes", "");
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
      <h1>Additional Notes?</h1>
      <form>
        <TextField
          id="name-field"
          placeholder="Bright indirect sunlight"
          label=""
          value={notes}
          onChange={updateInput}
        />
      </form>

      <Button href="Table" onClick={saveNotes} />
      
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
