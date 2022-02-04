const {Router} = require('express');
const TasksController = require('../controllers/tasksController');

const tasksRouter = Router();
tasksRouter.get('/', TasksController.getAllTasks);

module.exports = tasksRouter;