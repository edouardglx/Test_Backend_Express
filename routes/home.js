const express = require("express");
const router = express.Router();

const NewTask = require("../models/NewTask");

router.get("/Home", async (req, res) => {
  console.log("route home sollicité");
  try {
    const data = await NewTask.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
