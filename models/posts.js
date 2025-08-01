const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postModel = new Schema({
  title: { type: String, required: true },
  date: {
    type: Date,
    required: true,
    max: [new Date(), "Date cannot be in the future"],
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("posts", postModel);
