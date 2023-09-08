const { string } = require("joi");
const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  title: String,
  tags:[String],
  description: String,

});

module.exports = mongoose.model("Content", contentSchema);
