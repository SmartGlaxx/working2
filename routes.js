const {createTask, getTask, getTasks, 
    updateTask, deleteTask} = require("./controllers")
const express = require("express")
const router = express.Router()

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/", createTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router