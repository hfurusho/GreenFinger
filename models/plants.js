const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    notes: String
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;