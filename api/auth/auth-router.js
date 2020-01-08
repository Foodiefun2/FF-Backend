const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { signToken } = require("./auth-middleware.js");
const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  const { username, password, email, location } = req.body;
  const hash = bcrypt.hashSync(req.body.password, 12);
  req.body.password = hash;

  if (!username || !password || !location || !email) {
    res.status(400).json({
      message: "Please add an Username, Password, Location and Email"
    });
  } else {
    Users.addUser(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ message: "Server was unable to create new User" });
      });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findUserBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);

        res
          .status(200)
          .json({ token, user, message: `Welcome ${user.username} to FoodieFun` });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Server was unable to log you in" });
    });
});

module.exports = router;
