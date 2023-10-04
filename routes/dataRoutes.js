const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/data", dataController.getAllData);
router.post("/data", dataController.postData);

module.exports = router;
