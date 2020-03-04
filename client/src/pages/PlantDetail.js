import React from "react";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

export default function PlantDetail() {
    return(
        <Container>
            <h1>Plant's name</h1>
            <h2>Location:</h2>
            <h2>last watered on:</h2>
            <h2>Next water date:</h2>
            <h2>Addition notes: </h2>
            <Link color="primary" href="WaterSchedule">
                Change Water Schedule
            </Link>         
        </Container>
    )
}