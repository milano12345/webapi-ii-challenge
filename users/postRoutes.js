const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "hello from get router" });
});

router.get("/:id", (req, res) => {
  res.status(200).send(`hello from the number ${id} endpoint!`);
});

router.post("/", (req, res) => {
  res.status(200).send("hello from the post enpoint");
});

module.exports = router;
