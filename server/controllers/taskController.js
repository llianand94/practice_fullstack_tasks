const createError = require('http-errors');
const { Model } = require('sequelize');
const {Task} = require('../models');

module.exports.getAllTasks = async (req,res,next)=>{
  try{
    const {pagination} = req;
    const allTasks = await Task.findAll({...pagination});    
    if(!allTasks){
      return next(createError(404, "Tasks are empty"))
    }
    res.status(200).send({payload:allTasks});
  }catch(error){
    next(error);
  }
}

module.exports.createTask = async (req, res, next) =>{
  try{
    const {body} = req;
    const newTask = await Task.create(body);
    if(!body){
      return next(createError(404,"Body request do not have values"));
    } 
    res.status(201).send({payload:newTask});
  }catch(error){
    next(error);
  }
};
module.exports.updateTask = async (req, res, next) =>{
  try{
    const {body,taskInstance, params:{taskId}} = req;
    const updatedTask = await taskInstance.update(body,{returning:true});

    res.status(200).send({payload:updatedTask});
  }catch(error){
    next(error);
  };
};
module.exports.deleteTask = async (req, res, next) =>{
  try{
    const {params:{taskId}} = req;
    const rows = await Task.destroy({
      where:{
        id:taskId
    }});
    if(!rows){
      return next(createError(404, "Can't delete tasks by id"))
    }

    res.status(200).send({payload:rows});
  }catch(error){
    next(error);
  };
}