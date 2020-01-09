const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.getUsersReviews()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to get Users" });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.get(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to get User" });
    });
});

router.get("/:id/restaurants", restricted, (req, res) => {
  const { id } = req.params;

  Users.findRestByUser(id)
    .then(rests => {
      res.status(201).json(rests);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to retrieve Restaurants" });
    });
});

router.get("/:id/reviews", restricted, (req, res) => {
  const { id } = req.params;

  Users.getReviewByUser(id)
    .then(reviews => {
      res.status(201).json(reviews);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server was unable to retrieve Reviews" });
    });
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const hash = bcrypt.hashSync(changes.password, 12);
  changes.password = hash;

  Users.findUserById(id)
    .then(user => {
      if (user) {
        Users.updateUser(id, changes).then(updatedUser => {
          res.status(200).json({
            message: `${updatedUser.username} was updated`,
            updatedUser
          });
        });
      } else {
        res.status(404).json({ message: "Unable to find User" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to update User" });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.findUserById(id)
    .then(user => {
      if (user) {
        Users.deleteUser(id).then(deleted => {
          res
            .status(200)
            .json({ message: `${deleted} User was deleted` });
        });
      } else {
        res.status(404).json({ message: "Unable to find User" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to delete User" });
    });
});

module.exports = router;
