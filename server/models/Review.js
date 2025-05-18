// models/Review.js
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String }, // can be a URL or base64 string
  rating: { type: Number, min: 1, max: 5, required: true },
  likes: { type: Number, default: 0 },
  helpfulCount: { type: Number, default: 0 },
  flaggedCount: { type: Number, default: 0 },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
