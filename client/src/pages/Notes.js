import React from 'react';
//import TextField from "../components/TextField";
import Multiline from "../components/Multiline";
import Button from "../components/SubmitBtn";



function Notes(props) {
    return (
        <div style={{ textAlign: "center" }}>

            <h1>Additional Notes?</h1>

            <Multiline />
            <br />
            <Button />


        </div>

    )
}

export default Notes;