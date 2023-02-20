const express = require("express");
const router = express.Router();

const NewTask = require("../models/NewTask");

router.delete("/Home/delete/:id", async (req, res) => {
  console.log("route delete activé");
  console.log(req.params.id);
  try {
    if (req.params.id) {
      await NewTask.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Tache supprimé" });
    } else {
      res.status(400).send("Missing Id");
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
