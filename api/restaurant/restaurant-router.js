const router = require("express").Router();

const Rests = require("./restaurant-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Rests.getRestaurantsWithReviews()
    .then(rests => {
      res.status(200).json(rests);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to retrieve Restaurants" });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params

  Rests.get(id)
    .then(rest => {
      res.status(200).json(rest);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to retrieve Restaurants" });
    });
});


router.get("/:id/ratings", restricted, (req, res) => {
  const { id } = req.params;

  Rests.getRatingByRest(id)
    .then(ratings => {
      res.status(200).json(ratings);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to retrieve Ratings" });
    });
});

router.get("/:id/reviews", restricted, (req, res) => {
  const { id } = req.params;

  Rests.getReviewByRest(id)
    .then(reviews => {
      res.status(200).json(reviews);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to retrieve Reviews" });
    });
});

router.post("/", restricted, (req, res) => {
  const newRest = req.body;
  const { name, location, cuisine, foodie_id } = req.body;

  if (!foodie_id) {
    res.status(400).json({ message: "Please add a foodie_id" });
  } else if (!name || !location || !cuisine) {
    res
      .status(400)
      .json({ message: "Please add a name, location, and cuisine" });
  } else {
    Rests.addRest(newRest)
      .then(rest => {
        res.status(200).json(rest);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "Server was unable to create Restaurant" });
      });
  }
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Rests.findRestById(id)
    .then(rest => {
      if (rest) {
        Rests.updateRest(id, changes).then(updatedRest => {
          res.status(200).json(updatedRest);
        });
      } else {
        res.status(404).json({ message: "Unable to find Restaurant" });
      }
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to update Restaurant" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Rests.findRestById(id)
    .then(rest => {
      if (rest) {
        Rests.deleteRest(id).then(deleted => {
          res
            .status(204)
            .json({ message: `${deleted} Restaurant was deleted` });
        });
      } else {
        res.status(404).json({ message: "Unable to find Restaurant" });
      }
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to delete Restaurant" });
    });
});

module.exports = router;
