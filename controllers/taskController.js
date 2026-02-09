import Task from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
};
