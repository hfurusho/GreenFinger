import React from "react";
import TextField from "../components/TextField";
import Button from "../components/ContinueBtn";

export default function Name(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>What's the name of your plant?</h1>

      <TextField />
      <br />

      <Button href="Location" />
    </div>
  );
}
