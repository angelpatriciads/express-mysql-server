const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const dataRoutes = require("./routes/data");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use("/data", dataRoutes);

// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("app running"));
