import React from 'react';
import TextField from "../components/TextField";
import Button from "../components/NextBtn";



function Location(props) {
    return (
        <div style= {{ textAlign: "center" }}>
            <h1>Where is the location of this plant?</h1>

            <TextField />
            <br />
            <Button />

        </div>

        //insert continue button component here
    )
}

export default Location;
