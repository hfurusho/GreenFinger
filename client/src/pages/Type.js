import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import Button from "../components/ContinueBtn";

export default function Type() {
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      //const fetchData = async () => {}
      if (type == null || id === " ") {
        return;
      }
      const result = await axios(
        `https://pixabay.com/api/?key=15485203-cba91f318bb796f35c4848942&q=${type}&image_type=photo&pretty=true`
      );
        setImage(result.data);
      };
    fetchData();
  }, [type]); //useEffect will trigger whenever type is different

  function updateInput(event) {
    setType(event.target.value);
  }

  function searchImage(type) {
    imageAPI
      .search(type)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(error));
  }

  function saveType() {
    localStorage.setItem("plantType", type);

    handleSearchSubmit(type);
  }

  function handleSearchSubmit(type, event) {
    event.preventDefault();
    searchImage(type);
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
