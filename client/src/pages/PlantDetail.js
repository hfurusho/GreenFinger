import { React, useState, useEffect } from "react";
import API from "../utils/API";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "../components/DeleteBtn";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    color: "teal"
  }
}));

export default function PlantDetail(props) {
  const [plant, setPlant] = useState({});
  const [formObject, setFormObject] = useState({});

  // When this component mounts, grab the book with the _id of props.match.params.id
  useEffect(() => {
    API.getPlant(props.match.params.name)
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

  // When the form is submitted, use the API.savePlant method to save the book data
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
  function deletePlant(name) {
    API.deletePlant(name).catch(err => console.log(err));
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <h1>Plant's name: {plant.plantName}</h1>
        <img src={plant.plantImage} alt={plant.plantName} />
        <h2>Location: {plant.plantLocation}</h2>
        <h2>Plant's type: {plant.plantType}</h2>
        <h2>Start water on: {plant.plantStartDate}</h2>
        <h2>Water Frequency: {plant.plantPeriod}</h2>
        <h2>Water Time: {plant.plantTime}</h2>
        <h2>Addition notes: {plant.plantNotes}</h2>
        <Link color="primary" href="WaterSchedule" className={classes.link}>
          Change Water Schedule
        </Link>
        <Button onClick={() => deletePlant(plant.plantName)} />
        {/* is this right? */}
      </div>
    </Container>
  );
}
