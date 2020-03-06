const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  plantName: { type: String, required: true },
  plantLocation: { type: String, required: true },
  plantType: { type: String, required: true },
  plantStartDate: { type: String, required: true },
  plantTime: { type: String, required: true },
  plantPeriod: { type: String, required: true },
  plantNotes: { type: String, required: false },
  plantImage: { type: String, required: true }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
