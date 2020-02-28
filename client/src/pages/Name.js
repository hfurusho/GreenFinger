import React from 'react';
import TextField from "../components/TextField";
import {Link,Typography} from '@material-ui/core';
import Button from "../components/ContinueBtn";

function Name(props) {
    const classes = useStyles();
    return (
        
        <div style={{ textAlign: "center" }}>

            <h1>What's the name of your plant?</h1>

            <TextField />
            <br />
            <Typography className={classes.root}>
                <Link href="Location" onClick={preventDefault}>
                    <Button />
                </Link>
            </Typography>
        </div>
    )
}

export default Name;


