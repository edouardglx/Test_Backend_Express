const { default: mongoose } = require("mongoose");

const Task = mongoose.model("Task", {
  task: { type: String },
  done: { type: Boolean },
});

module.exports = Task;
