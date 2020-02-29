import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ContinueIcon from '@material-ui/icons/ArrowForward';
import lightGreen from '@material-ui/core/colors/lightGreen';

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
            style={{ background: lightGreen[500]} }
            startIcon={<ContinueIcon />}
            variant="contained">
                Continue
            </Button>
        </div>
    );
}