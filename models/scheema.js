const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title must be provided"],
    trim: true, // Remove leading/trailing whitespace
  },
  content: {
    type: String,
    trim: [true, "description must be provided"],
  },
  author: {
    type: String,
    trim: [true, "description must be provided"],
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blog", blogSchema);
