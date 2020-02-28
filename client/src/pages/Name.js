import React from "react";
import TextField from "../components/TextField";
import { Typography } from "@material-ui/core";
import Button from "../components/ContinueBtn";

function Name(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>What's the name of your plant?</h1>

      <TextField />
      <br />

      <Typography>
        <Button href="Location"/>
      </Typography>
    </div>
  );
}

export default Name;
