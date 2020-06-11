const express = require("express");
const recipeRouter = require("./api/recipeRouter");

const server = express();

server.use(express.json());
server.use("/api/recipe", recipeRouter);

server.get("/", (req, res) => res.status(200).json({ msg: "up" }));

module.exports = server;
