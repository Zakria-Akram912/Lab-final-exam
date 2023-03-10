const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  status: String,
});

module.exports = mongoose.model("Todo", todoSchema);
