import React from "react";
import TextField from "../components/TextField";
import { Typography } from "@material-ui/core";
import Button from "../components/ContinueBtn";

function WaterSchedule(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watering Schedule</h1>

      <TextField />
      <br />
      <Typography>
        <Button href="Notes" />
      </Typography>
    </div>
  );
}

export default WaterSchedule;
