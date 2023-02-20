const express = require("express");
const router = express.Router();

const NewTask = require("../models/NewTask");

router.post("/Home/add", async (req, res) => {
  try {
    console.log(req.fields);
    if (req.fields) {
      const addTask = new NewTask({
        task: req.fields.task,
        done: req.fields.done,
      });
      await addTask.save();
      res.status(200).json("Nouvelle tache enregistrée");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
