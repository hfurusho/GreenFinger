import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/SubmitBtn";

export default function Notes() {
  const [notes, setNotes] = useState("");
  const [plantObject, setPlantObject] = useState({});

  // Load all plants and store them with setPlantObject
  useEffect(() => {
    loadPlants()
  }, [])

  // Loads all planss and sets them to plants
  function loadPlants() {
    API.getPlants()
      .then(res => 
        setPlants(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a plant from the database with a given id, then reloads plants from the db
  // function deletePlant(id) {
  //   API.deletePlant(id)
  //     .then(res => loadPlants())
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  function handleDataChange(event) {
    const { name, value } = event.target;
    setPlantObject({...plantObject, [name]: value})
  };

  // When the form is submitted, use the API.savePlant method to save the plant data
  // Then reload plants from the database
  function handleDataSubmit(event) {
    event.preventDefault();
    if (plantObject.title && plantObject.author) {
      API.saveBook({
        title: plantObject.title,
        author: plantObject.author,
        synopsis: plantObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };
  
  
  function updateInput(event) {
    setNotes(event.target.value);
  }

  function saveNotes() {
    localStorage.setItem("plantNotes", notes);
  }

  // next steps:
  //   1. read all local storage values;
  //   2. send to MongoDB as object;
  //   3. clear local storage to blank: plantName="" ;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Additional Notes?</h1>
      <form>
        <TextField id="name-field" label="" value={notes} onChange={updateInput}/>
      </form>

      <Button href="Table" onClick={saveNotes} />
    </div>
  );
}
