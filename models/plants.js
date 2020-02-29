const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  name: { type: String, required: true },
  water: { type: Number, required: true },
  location: String,
  notes: String
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
