import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { TextField } from "@material-ui/core";
import Button from "../components/SubmitBtn";

export default function Notes() {
  const [notes, setNotes] = useState("");
  const [plantObject, setPlantObject] = useState({});

  // Load all plants and store them with setPlantObject
  useEffect(() => {
    loadPlants();
  }, []);

  // Loads all plants and sets them to plantObject
  function loadPlants() {
    API.getPlants()
      .then(res => setPlantObject(res.data))
      .catch(err => console.log(err));
  }

  // use the API.savePlant method to save the plant data
  // Then reload plants from the database
  function handleDataSubmit(plantObject) {
    if (plantObject.title && plantObject.author) {
      API.savePlant({
        name: plantObject.name,
        location: plantObject.location,
        startDate: plantObject.startDate,
        period: plantObject.period,
        waterTime: plantObject.waterTime,
        notes: plantObject.notes
      })
        .then(res => loadPlants())
        .catch(err => console.log(err));
    }
  }

  //functions for notes -------------------
  function updateInput(event) {
    setNotes(event.target.value);
  }

  function saveNotes() {
    localStorage.setItem("plantNotes", notes);

    //read all local storage values put into an object
    let plantObject;
    plantObject = {
      name: localStorage.getItem("plantName"),
      location: localStorage.getItem("plantLocation"),
      date: localStorage.getItem("date"),
      time: localStorage.getItem("time"),
      period: localStorage.getItem("period"),
      notes: localStorage.getItem("plantNotes")
    };
    console.log(plantObject);

    //send to MongoDB as object;
    handleDataSubmit(plantObject);

    //clear local storage to blank
    localStorage.setItem("plantName", "");
    localStorage.setItem("plantLocation", "");
    localStorage.setItem("date", "");
    localStorage.setItem("time", "");
    localStorage.setItem("period", "");
    localStorage.setItem("plantNotes", "");
  }

  return (
    <div style={{ textAlign: "center" }}>
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
  );
}

//-----------------------------------------
// next steps:
//   1. read all local storage values;
//   2. send to MongoDB as object;
//   3. clear local storage to blank: plantName="" ;
// button click -> saveNote -> handleDataSubmit() to Mongo

// Deletes a plant from the database with a given id, then reloads plants from the db
// function deletePlant(id) {
//   API.deletePlant(id)
//     .then(res => loadPlants())
//     .catch(err => console.log(err));
// }
