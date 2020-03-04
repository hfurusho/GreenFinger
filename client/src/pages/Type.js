import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default function Type() {
  const [type, setType] = useState("");

  function updateInput(event) {
    setType(event.target.value);
    }

  function saveType() {
    localStorage.setItem("plantType", type);
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>What's the type of this plant?</h1>
      <form>
        <TextField id="name-field" placeholder="monstera" label="" onChange={updateInput} />
      </form>
     
      <Button href="WaterSchedule" onClick={saveType}/>
    </div>
  );
}
