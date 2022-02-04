const {Router} = require('express');
const TasksController = require('../controllers/tasksController');
const { checkTask } = require('../middlewares/checkTask.mw');

const tasksRouter = Router();
tasksRouter.get('/', TasksController.getAllTasks);
// tasksRouter.post('/:taskId', checkTask, TasksController.createTask);

module.exports = tasksRouter;