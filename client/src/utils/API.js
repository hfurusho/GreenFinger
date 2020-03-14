import axios from "axios";

export default {
  // Gets all plants
  getPlants: function() {
    return axios.get("/api/plants");
  },
  // Gets the plant with the given id
  getPlant: function(id) {
    return axios.get("/api/plants/" + id);
  },
  // Deletes the plant with the given id
  deletePlant: function(plantId, userId) {
    return axios.delete("/api/plants/", {
      data: { plantId: plantId, userId: userId }
    });
  },
  // Saves a plant to the database
  savePlant: function(plantObject) {
    return axios.post("/api/plants", plantObject);
  },
  // Saves a plant to the database and also saves it to the user with the given ID.
  createAndSave: function(plantObject, id) {
    return axios.post("/api/plants/" + id, plantObject);
  }
};
