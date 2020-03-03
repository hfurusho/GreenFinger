import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/SubmitBtn";

export default function Notes() {
  const [notes, setNotes] = useState("");

  function updateInput(event) {
    setNotes(event.target.value);
  }

  function saveNotes() {
    localStorage.setItem("plantNotes", notes);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Additional Notes?</h1>
      <form>
        <TextField id="name-field" label="" value={notes} onChange={updateInput}/>
      </form>

      <Button href="Table" onClick={saveNotes} />
      
      {/* next steps:
        1. read all local storage values;
        2. send to MongoDB as object;
        3. clear local storage to blank: plantName="" ;*/}
    </div>
  );
}
