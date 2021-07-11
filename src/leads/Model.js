const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    lastname: String,
    firstname: String,
    email: String,
    phone: String,
    message: String
});

module.exports = mongoose.model("Lead", Schema);