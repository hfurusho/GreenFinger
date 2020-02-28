import React from 'react';
import TextField from "../components/TextField";
import Button from "../components/ContinueBtn";

function Name(props) {
    return (
        <div style={{ textAlign: "center" }}>

            <h1>What kind of plant?</h1>

            <TextField />
            <br />
            <Button />

        </div>


    )
}

export default Name;


