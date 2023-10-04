const express = require("express");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/dataRoutes");
const sequelize = require("./database/connection");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", dataRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
