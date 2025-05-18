// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  createReview,
  deleteReview,
} = require("../controllers/reviewController");

router.get("/", getAllReviews);
router.post("/", createReview);
router.delete("/:id", deleteReview);
router.post("/:id/like", likeReview);
router.post("/:id/helpful", markHelpful);
router.post("/:id/flag", flagReview);
router.post("/:id/comment", addComment);

module.exports = router;

// router.get("/", (req, res) => {
//   res.json({ message: "Panora backend is alive 😎" });
// });
