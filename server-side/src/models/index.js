//Model for tasks
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    message: String,
    topic: String,
    completed: Boolean 
});

const Model = mongoose.model("tasks", schema);

module.exports = Model