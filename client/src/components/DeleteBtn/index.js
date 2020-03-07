import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import teal from '@material-ui/core/colors/teal';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        style={{ color: "#fff", background: teal[500]}}
        startIcon={<DeleteIcon />}
        variant="contained"
      >
        Delete
      </Button>
    </div>
  );
}