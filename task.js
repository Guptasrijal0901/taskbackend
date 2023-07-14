const mongoose = require("mongoose");
const taskSchema= new mongoose.Schema({
TaskName: String,
TaskDescription: String,
TaskDate: Date,
TaskStatus: "{v.taskstatus}",
});
const taskmodel = mongoose.model("task", taskSchema)
module.exports= taskmodel;