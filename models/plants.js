const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
<<<<<<< HEAD
    name: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    notes: String
=======
  name: { type: String, required: true },
  water: { type: Number, required: true },
  location: String,
  notes: String
>>>>>>> cffe5f502e882a69bf3dec4c187f4bd6c15d0f3e
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
