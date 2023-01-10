const express = require("express");
const Todo = require("../models/todo");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const allTasks = await Todo.find();
  res.render("index", { tasks: allTasks });
});

router.get("/add-task", (req, res, next) => {
  res.render("addTask");
});

router.post("/add-task", async (req, res, next) => {
  const task = req.body.task;
  const sendTask = new Todo({
    task: task,
    status: "incomplete",
  });
  await sendTask.save();

  res.redirect("/");
});

router.get("/edit-task/:taskId", async (req, res, next) => {
  const taskId = req.params.taskId;
  const task = await Todo.findById(taskId);
  res.render("editTask", { task: task });
});

router.post("/edit-task", async (req, res, next) => {
  const updatedTask = req.body.task;
  const taskId = req.body.taskId;
  const task = await Todo.findById(taskId);
  task.task = updatedTask;
  task.save();
  res.redirect("/");
});

router.post("/delete-task", async (req, res, next) => {
  const taskId = req.body.taskId;
  const task = await Todo.findByIdAndRemove(taskId);
  res.redirect("/");
});

router.post("/mark-complete", async (req, res, next) => {
  const taskId = req.body.taskId;
  const task = await Todo.findById(taskId);
  task.status = "completed";
  task.save();
  console.log(task);
  res.redirect("/");
});

module.exports = router;
