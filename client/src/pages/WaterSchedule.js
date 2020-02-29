import React from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';

export default function WaterSchedule(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [selectedTime, setSelectedTime] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleTimeChange = date => {
    setSelectedTime(date);
  };

  function saveSelectedDate(){
    localStorage.setItem("date", selectedTime);
    localStorage.setItem("time", selectedTime);

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

    <div style={{ textAlign: "center" }}>
      <h1>Watering Schedule</h1>
      <h3>Start Date: </h3>
      <DatePicker onDateChange={handleDateChange} date={selectedDate} />
      <h3>Remind me every:</h3>
      <TextField />Days
      <h3>Notify me at</h3>
      <TimePicker onTimeChange={handleTimeChange} date={selectedTime}/>
      <br />
      
      <Button href="Notes" onClick={saveSelectedDate}/>

    </div>
    </Container>
  );
}

