// controllers/reviewController.js
const Review = require("../models/Review");

exports.getAllReviews = async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
};

exports.createReview = async (req, res) => {
  const { title, content, image, rating } = req.body;

  const review = new Review({
    title,
    content,
    image,
    rating,
  });

  await review.save();
  res.status(201).json(review);
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  res.status(204).send();
};

exports.likeReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  );
  res.json(review);
};

exports.markHelpful = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(
    id,
    { $inc: { helpfulCount: 1 } },
    { new: true }
  );
  res.json(review);
};

exports.flagReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(
    id,
    { $inc: { flaggedCount: 1 } },
    { new: true }
  );
  res.json(review);
};

exports.addComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const review = await Review.findById(id);
  review.comments.push({ content });
  await review.save();

  res.status(201).json(review);
};
