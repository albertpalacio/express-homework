const express = require("express");
const router = express.Router();

let count = 0;

router.put("/count", (req, res) => {
  res.json({ message: `This route has been hit ${count++} times.` });
});

router.delete("/reset", (req, res) => {
  count = 0;
  res.send("The count has been reset.");
});

router.post("/sum", (req, res) => {
  const number = req.body.number;
  res.send(`The sum of ${number} and 7  is ${number + 7}.`);
});

router.get("/subtract", (req, res) => {
  const number = req.body.number;
  res.send(`${number} -7 is ${number - 7}`);
});

module.exports = router;
