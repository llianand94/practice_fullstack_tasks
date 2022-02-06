const {Router} = require('express');
const TaskController = require('../controllers/taskController');
const { checkTask } = require('../middlewares/checkTask.mw');
const  { pagination } = require('../middlewares/pagination.mw');

const taskRouter = Router();
taskRouter.get('/', pagination, TaskController.getAllTasks);
// tasksRouter.post('/:taskId', checkTask, TasksController.createTask);

module.exports = taskRouter;