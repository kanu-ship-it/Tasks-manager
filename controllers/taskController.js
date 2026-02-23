const TaskSchemed = require("../models/Task");

// To create Task
exports.createTask = async (req, res) => {
  const task = await TaskSchemed.create({
    ...req.body,
    user: req.user
  });
  res.status(201).json(task);
};

// Geting User Tasks
exports.getTasks = async (req, res) => {
  const tasks = await TaskSchemed.find({ user: req.user });
  res.json(tasks);
};

// Updating Task
exports.updateTask = async (req, res) => {
  const task = await TaskSchemed.findOneAndUpdate(
    { _id: req.params.id, user: req.user },
    req.body,
    { new: true }
  );

  if (!task)
    return res.status(404).json({ message: "Task not found" });

  res.json(task);
};

// Deleting Task
exports.deleteTask = async (req, res) => {
  const task = await TaskSchemed.findOneAndDelete({
    _id: req.params.id,
    user: req.user
  });

  if (!task)
    return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task deleted" });
};

