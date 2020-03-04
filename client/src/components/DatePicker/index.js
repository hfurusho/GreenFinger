import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';

class MaterialUIDatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedDate: new Date() };
  }

  DATE_FORMAT = 'MM/DD/YYYY';

  onDateChanged(date) {
    this.setState({ selectedDate: date });
    this.props.onChange('dateSelected', moment(date).format(this.DATE_FORMAT));
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label=""
            value={this.state.selectedDate}
            onChange={this.onDateChanged.bind(this)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    )
  };
}

export default MaterialUIDatePicker;
