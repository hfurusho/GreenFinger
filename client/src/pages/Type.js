import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default function Type() {
  const [type, setType] = useState("");

  //should I use useEffect here or no?
  // useEffect(() => {
  //   if (type) searchImage();
  // }, [type]); 
  //useEffect will trigger whenever type is different

  async function searchImage() {
    console.log(res)
    const res = await fetch(
      `https://pixabay.com/api/?key=15485203-cba91f318bb796f35c4848942&q=${type}&image_type=photo&pretty=true`
    );
    //pull out the data as usual, //res.json()???
    const json = await res.json();
    //save the image into state
    localStorage.setItem("image", json.data.hits[0].webformatURL); //is this right?

    // const err = await console.log(err); //is this how to cathch errors?
  }

  function saveType() {
    localStorage.setItem("plantType", type);

    searchImage(type);
  }

  function updateInput(event) {
    setType(event.target.value);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>What's the type of this plant?</h1>
      <form>
        <TextField id="name-field" placeholder="monstera"
          label="" onChange={updateInput}
        />
      </form>

      <Button href="WaterSchedule" onClick={saveType} />
    </div>
  );
}

// effect functions can't be async, so declare the async function inside the effect, then call it
