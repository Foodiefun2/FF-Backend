const router = require("express").Router();

const Reviews = require("./review-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.post("/", restricted, (req, res) => {
  const newReview = req.body;
  const { menu_item, rating, review, foodie_id, restaurant_id } = req.body;

  if (!foodie_id || !restaurant_id) {
    res
      .status(400)
      .json({ message: "Please add a foodie_id and a restaurant_id" });
  } else if (!menu_item || !rating || !review) {
    res
      .status(400)
      .json({ message: "Please add a menu_item, rating, and review" });
  } else {
    Reviews.addReview(newReview)
      .then(review => {
        res.status(200).json(review);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Server was unable to create Review" });
      });
  }
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Reviews.findReviewById(id)
    .then(review => {
      if (review) {
        Reviews.updateReview(id, changes).then(updatedReview => {
          res.status(200).json(updatedReview);
        });
      } else {
        res.status(404).json({ message: "Unable to find Review" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to update Review" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Reviews.findReviewById(id)
    .then(review => {
      if (review) {
        Reviews.deleteReview(id).then(deleted => {
          res.status(204).json({ message: `${deleted} Review was deleted` });
        });
      } else {
        res.status(404).json({ message: "Unable to find Review" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to delete Review" });
    });
});

module.exports = router;
