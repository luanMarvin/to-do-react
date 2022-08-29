const TaskModel = require("../models");

async function get(req, res){
    const {topic} = req.params

    const obj = topic ? { topic } : null
    const gotObj = await TaskModel.find(obj)
    res.send(gotObj);
}

async function post(req, res){
    const {
        message,
        topic,
        completed
    } = req.body

    const register = new TaskModel({
        message,
        topic,
        completed
    });

    register.save();
    res.send(register);
}

async function put(req, res){
    const {id} = req.params;

    const task = await TaskModel.findOneAndUpdate({
        _id: id
    },  req.body,{
        new: true
    });
    res.send(task)
}

async function rmv(req, res){
    const { id } = req.params;

    const remove = await TaskModel.deleteOne({_id:id})
}

module.exports = {
    get,
    post,
    put,
    rmv
};