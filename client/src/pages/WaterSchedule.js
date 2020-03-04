import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';
import { AddDays } from '../utils/date-tool';
import moment from 'moment';


export default class WaterSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      nextDate: "",
      frequency: 1,
      reminderTime: moment().format('h:mm A')
    };
    this.updatestartDate = this.updatestartDate.bind(this)
    this.updateFrequency = this.updateFrequency.bind(this)
    this.updateReminderTime = this.updateReminderTime.bind(this)
    this.saveScheduleData = this.saveScheduleData.bind(this)
  }

  updatestartDate(event, date) {
    const frequency = this.state.frequency;
    const nextDate = AddDays(date, frequency);
    this.setState({
      startDate: date,
      nextDate: nextDate
    });
  }

  updateFrequency(event) {
    console.log(event.target.value);
    const frequency = parseInt(event.target.value);
    const nextDate = AddDays(this.state.startDate, frequency);
    this.setState({
      frequency: frequency,
      nextDate: nextDate
    });
  }

  updateReminderTime(event, time) {
    const timeOfDay = moment(time).format('h:mm A');
    console.log(timeOfDay);
    this.setState({
      reminderTime: timeOfDay
    });
  }

  saveScheduleData(event) {
    const startDate = this.state.startDate;
    const nextDate = this.state.nextDate;
    const frequency = this.state.frequency;
    const reminderTime = this.state.reminderTime;

    const validInput = this.validate(startDate, frequency, reminderTime);
    if (!validInput) {
      event.preventDefault();
    }
    else {
      localStorage.setItem("startDate", startDate);
      localStorage.setItem("nextDate", nextDate);
      localStorage.setItem("frequency", frequency);
      localStorage.setItem("reminderTime", reminderTime);
    }
  }

  validate(startDate, frequency, reminderTime) {
    if (!startDate) {
      alert('You must select a start date');
      return false;
    }
    if (!frequency) {
      alert('You must select a frequency');
      return false;
    }
    if (!reminderTime) {
      alert('You must select a reminder time');
      return false;
    }
    return true;
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{ textAlign: "center" }}>
          <h1>Watering Schedule</h1>
          <h3>Start Date: </h3>
          <DatePicker
            onChange={this.updatestartDate} />
          <h3>Frequency:</h3>
          <TextField
            type="number"
            InputProps={{
              inputProps: {
                min: 1
              }
            }}
            value={this.state.frequency}
            onChange={this.updateFrequency} />Days
      <h3>Notify me at</h3>
          <TimePicker
            onChange={this.updateReminderTime} />
          <br />
          <Button href="Notes" onClick={this.saveScheduleData} />
        </div>
      </Container>
    );
  }
}

