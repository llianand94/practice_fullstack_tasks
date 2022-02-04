const {createError} = require('http-errors');
const {Task} = require('../models/task');


module.exports.checkTask = async (req,res,next)=>{
  try{
    const {params:{taskId}}= req;
    const taskInstance = await Task.findByPk(taskId);
    if(!taskInstance){
      return next(createError(404, 'Task with id '+ taskId + ' not found'));
    }
    req.taskInstance = taskInstance;
  }catch(error){
    next(error);
  }
}