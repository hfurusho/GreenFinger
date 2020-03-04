import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default function Name() {
  const [name, setName] = useState("");

  function updateInput(event) {
    setName(event.target.value);
  }

  function saveName() {
    localStorage.setItem("plantName", name);
  }


  return (
    <div style={{ textAlign: "center" }}>
      <h1>What is the name of your plant?</h1>
      <form>
        <TextField
          id="name-field"
          label=""
          placeholder="cactus"
          variant="filled"
          onChange={updateInput}
        />
      </form>

      <Button href="Location" onClick={saveName} />
    </div>
  );
}