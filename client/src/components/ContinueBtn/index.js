import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import lightGreen from '@material-ui/core/colors/lightGreen';
// const accent = lightGreen['600'];

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    Button: {
        color: lightGreen,
    },
}));

export default function ContainedButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} variant="contained">
                Continue
            </Button>
        </div>
    );
}