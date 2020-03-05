import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";
import Axios from "axios";

export default function Type() {
  const [type, setType] = useState("");

  //should I use useEffect here or no?
  // useEffect(() => {
  //   if (type) searchImage();
  // }, [type]);
  //useEffect will trigger whenever type is different

  function searchImage(type) {
    console.log("searchImage fired");
    const queryUrl = `https://pixabay.com/api/?key=15485203-cba91f318bb796f35c4848942&q=${type}&image_type=photo&pretty=true`;
    Axios.get(queryUrl)
      .then(function(res){
        const imageUrl = res.data.hits[0].webformatURL;
        console.log("api call result", res);
        console.log("imageUrl", imageUrl);
        saveImage(imageUrl);
      })
      .catch(err => console.log(err)) 
      
    }
  
  function saveImage(imgUrl) {
    console.log("saveImg fired");
    localStorage.setItem("image", imgUrl);
  }

  function saveType() {
    console.log("saveType fired");
    localStorage.setItem("plantType", type); //where is type defined?

    searchImage(type);
  }

  function updateInput(event) {
    setType(event.target.value);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>What's the type of this plant?</h1>
      <form>
        <TextField
          id="name-field"
          placeholder="monstera"
          label=""
          onChange={updateInput}
        />
      </form>

      <Button href="WaterSchedule" onClick={saveType} />
    </div>
  );
}

// effect functions can't be async, so declare the async function inside the effect, then call it
