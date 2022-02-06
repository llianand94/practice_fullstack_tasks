const createError = require('http-errors');
const { Model } = require('sequelize');
const {Task} = require('../models');

module.exports.getAllTasks = async (req,res,next)=>{
  try{
    const {pagination} = req;
    const allTasks = await Task.findAll({...pagination});
    console.log(allTasks.lenght );
    if(!allTasks){
      return next(createError(404, "Tasks are empty"))
    }
    res.status(200).send({data:allTasks});
  }catch(error){
    next(error);
  }
}

