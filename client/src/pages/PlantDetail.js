import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
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
  const [formObject, setFormObject] = useState({});
  const {
    user: { id: userId }
  } = useContext(authContext);

  useEffect(() => {
    const plantId = props.match.params.id;
    API.getPlant(plantId)
      .then(res => setPlant(res.data))
      .catch(err => console.log(err));
  }, []);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function loadPlants() {
    API.getPlant()
      .then(function(res) {
        setPlant(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.savePlant method to save the data
  // Then reload plants from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.location) {
      API.savePlant({
        plantName: formObject.plantName,
        plantLocation: formObject.plantLocation,
        plantType: formObject.plantType,
        plantStartDate: formObject.plantStartDate,
        plantPeriod: formObject.plantPeriod,
        plantTime: formObject.plantTime,
        plantNotes: formObject.plantNotes,
        plantImage: formObject.plantImage
      })
        .then(res => loadPlants())
        .catch(err => console.log(err));
    }
  }

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

        <Link color="primary" href="WaterSchedule" className={classes.link}>
          Change Water Schedule
        </Link>
        <Button onClick={deletePlant} />
        {/* is this right? */}
      </div>
    </Container>
  );
}
