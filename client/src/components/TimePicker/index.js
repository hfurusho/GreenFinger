import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

class MaterialUITimePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedDateTime: new Date() };
  }

  onTimeChanged(dateTime) {
    this.setState({ selectedDateTime: dateTime });
    this.props.onChange('timeSelected', dateTime.getTime());
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label=""
            value={this.state.selectedDateTime}
            onChange={this.onTimeChanged.bind(this)}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

export default MaterialUITimePicker;