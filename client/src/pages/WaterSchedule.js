import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";

import { makeStyles } from "@material-ui/core/styles";
import { format } from "date-fns";
import API from "../utils/API";

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
  const { plantStartDate, plantTime, plantPeriod } = getPropsState();
  const [selectedDate, setSelectedDate] = useState(
    formatStartDate(plantStartDate) || new Date()
  );
  const [selectedTime, setSelectedTime] = useState(
    formatPlantTime(plantTime) || new Date()
  );
  const [period, setPeriod] = useState(plantPeriod || "");
  const [errors, setErrors] = useState({ startDate: "", period: "", time: "" });

  const classes = useStyles();

  function getPropsState() {
    if (props.location.state) {
      return props.location.state;
    } else {
      return {
        plantStartDate: "",
        plantTime: "",
        plantPeriod: ""
      };
    }
  }

  function formatStartDate(startDate) {
    if (startDate) {
      const startDateArr = startDate.split("-");
      const [year, month, day] = startDateArr;
      return new Date(year, month - 1, day);
    }
  }

  function formatPlantTime(time) {
    if (time) {
      const timeArr = time.split(/[ :]/);
      let hours = timeArr[0];
      if (timeArr[2] === "PM") {
        hours += 12;
      }
      const mins = timeArr[1];
      const formattedTime = new Date().setHours(hours, mins);
      return formattedTime;
    } else {
      return;
    }
  }

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

  function saveWateringSchedule() {
    if (!Number.isNaN(parseInt(period)) && !errors.time && !errors.startDate) {
      const formattedSelectedDate = format(selectedDate, "yyyy-MM-dd");
      const formattedSelectedTime = format(selectedTime, "p");

      if (!props.location.state) {
        localStorage.setItem("plantStartDate", formattedSelectedDate);
        localStorage.setItem("plantTime", formattedSelectedTime);
        localStorage.setItem("plantPeriod", period);
        props.history.push("/Notes");
      } else {
        const plantId = props.location.state.plantId;

        API.updatePlant(
          {
            plantStartDate: formattedSelectedDate,
            plantTime: formattedSelectedTime,
            plantPeriod: period
          },
          plantId
        )
          .then(plant => {
            props.history.push("/plant/" + plantId);
          })
          .catch(err => {
            throw err;
          });
      }
    } else {
      if (Number.isNaN(parseInt(period))) {
        setErrors({
          ...errors,
          period: "Please input a valid watering period."
        });
      }
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
            placeholder=" i.e. 14"
            style={{ backgroundColor: "#e0f2f1" }}
            onChange={updateInput}
            type="number"
            defaultValue={period}
            required
          />
          Days
          <div className={classes.error}>{errors.period}</div>
          <h3>Notify me at</h3>
          <TimePicker
            onTimeChange={handleTimeChange}
            selectedTime={selectedTime}
          />
          <Button className={classes.btn} onClick={saveWateringSchedule} />
        </div>
      </div>
    </Container>
  );
}
