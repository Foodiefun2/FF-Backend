const router = require("express").Router();

const Ratings = require("./ratings-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.post("/", restricted, (req, res) => {
  const newRating = req.body;
  const { restaurant_id } = req.body;

  if (!restaurant_id) {
    res.status(400).json({ message: "Please add a restaurant_id" });
  } else {
    Ratings.addRating(newRating)
      .then(rating => {
        res.status(200).json(rating);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Server was unable to create Rating" });
      });
  }
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Ratings.findRatingById(id)
    .then(rating => {
      if (rating) {
        Ratings.updateRating(id, changes).then(updatedRating => {
          res.status(200).json(updatedRating);
        });
      } else {
        res.status(400).json({ message: "Unable to find Rating" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to update Rating" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Ratings.findRatingById(id)
    .then(rating => {
      if (rating) {
        Ratings.deleteRating(id).then(deleted => {
          res.status(204).json({ message: `${deleted} Rating was deleted`, rating });
        });
      } else {
        res.status(400).json({ message: "Unable to find Rating" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to delete Rating" });
    });
});

module.exports = router;
