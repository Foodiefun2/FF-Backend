const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/:id/restaurants", restricted, (req, res) => {
  const { id } = req.params;

  Users.findRestByUsers(id)
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

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  const hash = bcrypt.hashSync(changes.password, 12);
  changes.password = hash;

  Users.findUserById(id)
    .then(user => {
      if (user) {
        Users.update(id, changes).then(updatedUser => {
          res.status(200).json(updatedUser);
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
          res.status(204).json({ message: `User ${deleted} was deleted` });
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

module.exports = router