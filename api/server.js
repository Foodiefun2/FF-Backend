const express = require("express");
const configMiddleware = require("../middleware.js");

const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/users-router.js");
const restRouter = require("./restaurant/restaurant-router.js");

const server = express();

configMiddleware(server);

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/restaurants", restRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

module.exports = server;
