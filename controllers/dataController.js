const Puff = require("../models/puff");
const Kambuh = require("../models/Kambuh");

exports.getAllData = async (req, res) => {
  const allData = await Puff.findAll();
  res.json(allData);
};

exports.postData = async (req, res) => {
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
    //BUATTT UPDATEEEE ROWWW COYYYY tiap puff
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
};
