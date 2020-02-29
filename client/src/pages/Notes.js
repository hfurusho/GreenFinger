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
        <TextField
          id="name-field"
          label=""
          value={notes}
          onChange={updateInput}
        />
      </form>
      <br />

      <Button href="Table" onClick={saveNotes} />
      {/* next steps:
        read all local storage values;
        send to MongoDB as object;
        clear local storage to blank: plantName="" ;*/}
    </div>
  );
}
