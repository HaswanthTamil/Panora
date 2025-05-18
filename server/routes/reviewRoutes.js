// routes/reviewRoutes.js
import express from "express";
import {
  getAllReviews,
  createReview,
  deleteReview,
  likeReview,
  markHelpful,
  flagReview,
  addComment,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getAllReviews);
router.post("/review", createReview);
router.delete("/:id", deleteReview);
router.post("/:id/like", likeReview);
router.post("/:id/helpful", markHelpful);
router.post("/:id/flag", flagReview);
router.post("/:id/comment", addComment);

export default router;
