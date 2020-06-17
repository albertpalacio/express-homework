const express = require("express");
const pingRoute = require("./routes/ping");
const chuckRoute = require("./routes/chuck");
const mathRoutes = require("./routes/math");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", pingRoute);
app.use("/", chuckRoute);
app.use("/", mathRoutes);
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
