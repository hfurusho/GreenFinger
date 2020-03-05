const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true },
    period: { type: String, required: true },
    time: { type: String, required: true },
    notes: { type: String, required: true },
    image: { type: String, required: true }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
