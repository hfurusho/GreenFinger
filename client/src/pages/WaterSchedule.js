import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";

import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  btn: {
    marginTop: theme.spacing(4)
  },
  error: {
    color: "red"
  }
}));

export default function WaterSchedule(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTime, setSelectedTime] = React.useState(new Date());
  const [period, setPeriod] = useState("");
  const [errors, setErrors] = useState({ startDate: "", period: "", time: "" });

  const handleDateChange = date => {
    setSelectedDate(date);

    if (date.toString() === "Invalid Date") {
      setErrors({ ...errors, startDate: "Invalid Date" });
    } else {
      setErrors({ ...errors, startDate: "" });
    }
  };

  const handleTimeChange = time => {
    setSelectedTime(time);

    if (time.toString() === "Invalid Date") {
      setErrors({ ...errors, time: "Invalid Time" });
    } else {
      setErrors({ ...errors, time: "" });
    }
  };

  function updateInput(event) {
    setPeriod(event.target.value);
  }

  const classes = useStyles();

  function saveSelectedDate() {
    if (!Number.isNaN(parseInt(period)) && !errors.time && !errors.startDate) {
      localStorage.setItem(
        "plantStartDate",
        format(selectedDate, "yyyy-MM-dd")
      );
      localStorage.setItem("plantTime", format(selectedTime, "p"));
      localStorage.setItem("plantPeriod", period);
      props.history.push("Notes");
    } else {
      setErrors({ ...errors, period: "Please input a valid watering period." });
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <div style={{ textAlign: "center" }}>
          <h2>Watering Schedule</h2>
          <h3>Start Date: </h3>
          <DatePicker onDateChange={handleDateChange} date={selectedDate} />
          <h3>Remind me every:</h3>
          <TextField
            id="period-field"
            placeholder="  i.e. 14"
            style={{ backgroundColor: "#e0f2f1" }}
            onChange={updateInput}
            type="number"
            required
          />
          Days
          <div className={classes.error}>{errors.period}</div>
          <h3>Notify me at</h3>
          <TimePicker
            onTimeChange={handleTimeChange}
            selectedTime={selectedTime}
          />
          <Button className={classes.btn} onClick={saveSelectedDate} />
        </div>
      </div>
    </Container>
  );
}
