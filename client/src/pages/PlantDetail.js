import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Button from "../components/DeleteBtn";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import authContext from "../authContext";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  link: {
    color: "teal"
  }
}));

export default function PlantDetail(props) {
  const [plant, setPlant] = useState({});
  const {
    user: { id: userId },
    isAuthenticated
  } = useContext(authContext);

  useEffect(() => {
    if (isAuthenticated) {
      const plantId = props.match.params.id;
      API.getPlant(plantId)
        .then(res => setPlant(res.data))
        .catch(err => console.log(err));
    }
  }, [isAuthenticated]);

  // Deletes a plant from the database with a given name
  const deletePlant = event => {
    event.preventDefault();
    console.log("deleting plant with id: " + plant._id);
    API.deletePlant(plant._id, userId)
      .then(() => {
        props.history.push("/table");
      })
      .catch(err => console.log(err));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h2>Plant's name: {plant.plantName}</h2>
        <img
          src={plant.plantImage}
          alt={plant.plantName}
          style={{ maxWidth: "100%" }}
        />
        <h2>Location: {plant.plantLocation}</h2>
        <h2>Plant's type: {plant.plantType}</h2>
        <h2>Start water on: {plant.plantStartDate}</h2>
        <h2>Water Frequency: {plant.plantPeriod}</h2>
        <h2>Water Time: {plant.plantTime}</h2>
        <h2>Addition notes: {plant.plantNotes}</h2>

        <Link
          color="primary"
          to={{
            pathname: "/WaterSchedule/" + plant._id,
            state: {
              plantId: plant._id,
              plantStartDate: plant.plantStartDate,
              plantTime: plant.plantTime,
              plantPeriod: plant.plantPeriod
            }
          }}
          className={classes.link}
        >
          Change Water Schedule
        </Link>
        <Button onClick={deletePlant} />
      </div>
    </Container>
  );
}
