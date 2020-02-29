import React from "react";
import TextField from "../components/TextField";
import Button from "../components/ContinueBtn";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function WaterSchedule(props) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

    <div style={{ textAlign: "center" }}>
      <h1>Watering Schedule</h1>
      <h3>Start Date: </h3>
      <TextField />
      <h3>Remind me every:</h3>
      <TextField />Days
      <h3>Notify me at</h3>
      <TextField />
      <br />
      
      <Button href="Notes" />
    </div>
    </Container>
  );
}
