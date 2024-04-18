const Task = require("./models")

const createTask = async(req, res)=>{
    try{
        const newTask = new Task(req.body)
        const createdTask = await newTask.save()
        res.status(200).json(createdTask)
    }catch(error){
        console.log(error.message)
    }
}
const getTasks = async(req, res)=>{
    try{
        const tasks = await Task.find()
        res.status(200).json(tasks)
    }catch(error){
        console.log(error.message)
    }
}
const getTask = async(req, res)=>{
    try{
        const {id} = req.params
        const task = await Task.findOne({_id: id})
        if(task){
            res.status(200).json(task)
        }else{
            console.log("task not found")
        }
        
    }catch(error){
        console.log(error.message)
    }
}
const updateTask = async(req, res)=>{
    try{
        const {id} = req.params
        const newTask = {
            title: req.body.title,
            desc: req.body.desc,
            completed: req.body.completed
        }
        const taskUpdated = await Task.findOneAndUpdate({_id: id}, newTask,
            {new: true, runValidators: true})
        if(taskUpdated){
            res.status(200).json(taskUpdated)
        }else{
            console.log("task not updated")
        }
    }catch(error){
        console.log(error.message)
    }
}
const deleteTask = async(req, res)=>{
    try{
        const {id} = req.params
        const taskDeleted = await Task.findOneAndDelete({_id: id})
        if(taskDeleted){
            res.status(200).json(taskDeleted)
        }else{
            console.log("task not deleted")
        }
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {createTask, getTask, getTasks, updateTask, deleteTask}