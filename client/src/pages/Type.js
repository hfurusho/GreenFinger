import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  }
}));

export default function Type() {
  const [type, setType] = useState("");

  //should I use useEffect here or no?
  // useEffect(() => {
  //   if (type) searchImage();
  // }, [type]);
  //useEffect will trigger whenever type is different

  function searchImage(type) {
    console.log("searchImage fired");
    console.log(type);

    const queryUrl = `https://pixabay.com/api/?key=15485203-cba91f318bb796f35c4848942&q=${type}&image_type=photo&pretty=true`;
    // axios.get(queryUrl)
    //   .then(function(res){
    //     const imageUrl = res.data.hits[0].webformatURL;
    //     console.log("api call result", res);
    //     console.log("imageUrl", imageUrl);

    //     saveImage(imageUrl);
    //   })
    //   .catch(err => console.log(err))

    fetch(queryUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const imageUrl = data.hits[0].webformatURL;
        console.log("api call result", data);
        console.log("imageUrl", imageUrl);

        saveImage(imageUrl);
      });
  }

  function saveImage(imgUrl) {
    console.log("saveImg fired");
    localStorage.setItem("plantImage", imgUrl);
  }

  async function saveType() {
    console.log("saveType fired");
    localStorage.setItem("plantType", type); //where is type defined?

    searchImage(type);
  }

  function updateInput(event) {
    setType(event.target.value);
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
      <h1>What's the type of this plant?</h1>
      <form>
        <TextField
          id="name-field"
          placeholder="monstera"
          label=""
          onChange={updateInput}
        />
      </form>

      <Button href="WaterSchedule" onClick={async() => {await saveType()}} />
    </div>
    </Container>

  );
}

// effect functions can't be async, so declare the async function inside the effect, then call it
