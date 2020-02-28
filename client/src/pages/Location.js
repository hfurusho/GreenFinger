import React from "react";
import TextField from "../components/TextField";
import { Typography } from "@material-ui/core";
import Button from "../components/ContinueBtn";

function Location(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Where is the location of this plant?</h1>

      <TextField />
      <br />
      <Typography>
        <Button href="WaterSchedule" />
      </Typography>
    </div>
  );
}

export default Location;
