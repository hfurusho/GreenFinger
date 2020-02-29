import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default function Location() {
  const [location, setLocation] = useState("");

  function updateInput(event) {
    setLocation(event.target.value);
    }

  function saveLocation() {
    localStorage.setItem("plantLocation", location);
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Where is the location of this plant?</h1>
      <form>
        <TextField id="name-field" label="" onChange={updateInput} />
      </form>
     
      <Button href="WaterSchedule" onClick={saveLocation}/>
    </div>
  );
}
