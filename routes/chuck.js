const express = require("express");
const axios = require("axios");

const express = express.Router();

router.get("/", async (req, res) => {
  const response = await axios.get("https://api.chucknorris.io/ ");
  console.log(response);
  res.send(response.data.value);
});

module.export = router;
