import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";
import { format } from "date-fns";

export default function WaterSchedule(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-03-07T21:11:54")
  );
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [selectedTime, setSelectedTime] = React.useState(
    new Date("2020-03-07T09:11:54")
  );
  const handleTimeChange = time => {
    setSelectedTime(time);
  };

  const [period, setPeriod] = useState("7");
  function updateInput(event) {
    setPeriod(event.target.value);
  }

  function saveSelectedDate() {
    localStorage.setItem("plantStartDate", format(selectedDate, "yyyy-MM-dd"));
    localStorage.setItem("plantTime", format(selectedTime, "p"));
    localStorage.setItem("plantPeriod", period);
    props.history.push("Notes");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div style={{ textAlign: "center" }}>
        <h1>Watering Schedule</h1>
        <h3>Start Date: </h3>
        <DatePicker onDateChange={handleDateChange} date={selectedDate} />
        <h3>Remind me every:</h3>
        <TextField id="period-field" onChange={updateInput} />
        Days
        <h3>Notify me at</h3>
        <TimePicker
          onTimeChange={handleTimeChange}
          selectedTime={selectedTime}
        />
        <br />
        <Button onClick={saveSelectedDate} />
      </div>
    </Container>
  );
}
