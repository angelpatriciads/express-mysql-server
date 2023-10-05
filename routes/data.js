const express = require("express");
const router = express.Router();
const Puff = require("../models/Puff");
const Kambuh = require("../models/Kambuh");

// GET semua data
router.get("/puff", async (req, res) => {
  const allData = await Puff.findAll();
  res.json({ results: allData });
});

router.get("/kambuh", async (req, res) => {
  const allData = await Kambuh.findAll();
  res.json({ results: allData });
});

// POST data baru
router.post("/", async (req, res) => {
  try {
    const lastPuff = await Puff.findOne({ order: [["DateTime", "DESC"]] });

    let currentKambuhID;
    if (lastPuff) {
      const timeDiff = new Date() - new Date(lastPuff.DateTime);
      if (timeDiff <= 10000) {
        currentKambuhID = lastPuff.KambuhID;
      } else {
        //Tambahin row buat di table kambuh
        currentKambuhID = lastPuff.KambuhID + 1;
        await Kambuh.create({ KambuhID: currentKambuhID, Start: new Date() });
      }
    } else {
      currentKambuhID = 1;
      await Kambuh.create({ KambuhID: currentKambuhID, Start: new Date() });
    }

    const newPuff = await Puff.create({ KambuhID: currentKambuhID });
    const currentKambuh = await Kambuh.findByPk(currentKambuhID);
    currentKambuh.End = new Date();
    currentKambuh.TotalPuff += 1;
    currentKambuh.LamaKambuh = new Date(
      currentKambuh.End - currentKambuh.Start
    );
    await currentKambuh.save();

    res.json(newPuff);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
