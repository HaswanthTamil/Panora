// controllers/reviewController.js
import Review from "../models/Review.js";

export const getAllReviews = async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
};

export const createReview = async (req, res) => {
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

export const deleteReview = async (req, res) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  res.status(204).send();
};

export const likeReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(
    id,
    { $inc: { likes: 1 } },
    { new: true }
  );
  res.json(review);
};

export const markHelpful = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(
    id,
    { $inc: { helpfulCount: 1 } },
    { new: true }
  );
  res.json(review);
};

export const flagReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByIdAndUpdate(
    id,
    { $inc: { flaggedCount: 1 } },
    { new: true }
  );
  res.json(review);
};

export const addComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  const review = await Review.findById(id);
  review.comments.push({ content });
  await review.save();

  res.status(201).json(review);
};

export default {
  getAllReviews,
  createReview,
  deleteReview,
  likeReview,
  markHelpful,
  flagReview,
  addComment,
};
