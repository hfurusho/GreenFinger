import React from "react";
import TextField from "../components/TextField";
import Button from "../components/ContinueBtn";

function WaterSchedule(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watering Schedule</h1>

      <TextField />
      <br />
      
      <Button href="Notes" />
    </div>
  );
}

export default WaterSchedule;
