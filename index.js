const express = require("express");
const task = express();
task.get("/task", (req,res)=>{
    return res.json({message: "app is ready"})
});