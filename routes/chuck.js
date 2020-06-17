const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await axios.get("https://api.chucknorris.io/ ");
  console.log(response);
  res.send(response.data.value);
});

module.exports = router;
