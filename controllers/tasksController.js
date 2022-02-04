const { Model } = require('sequelize');
const {Tasks} = require('../models');

module.exports.getAllTasks = async (req,res,next)=>{
  try{
    const allTasks = await Tasks.findAll();
    res.status(200).send({data:allTasks});
  }catch(error){
    next(error);
  }
}

