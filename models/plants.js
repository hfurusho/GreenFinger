const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    period: { type: Number, required: true },
    waterTime: { type: Date, required: true },
    notes: { type: String, required: false },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
