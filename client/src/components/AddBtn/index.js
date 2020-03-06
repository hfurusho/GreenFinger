import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button 
        onClick={props.onClick} 
        className={`card-btn ${props["data-value"]}`} 
        {...props} 
        style={{ color: "#fff", background: teal[500]}}
        startIcon={<AddIcon />}
        variant="contained">
            Add
        </Button>
    </div>
);
}