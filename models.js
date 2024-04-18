const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    desc: {
        type:String,
        required: true,
    },
    completed: {
        type: String,
        required: true,
    }
}, {collection: "tasks"})

module.exports = mongoose.model("Task", TaskSchema)
