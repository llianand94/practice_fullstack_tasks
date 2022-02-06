const {Router} = require('express');
const TaskController = require('../controllers/taskController');
const { checkTask } = require('../middlewares/checkTask.mw');
const  { pagination } = require('../middlewares/pagination.mw');

const taskRouter = Router();
taskRouter.get('/', pagination, TaskController.getAllTasks);
taskRouter.post('/', TaskController.createTask);
taskRouter.patch('/:taskId', checkTask, TaskController.updateTask);
taskRouter.delete('/:taskId', checkTask, TaskController.deleteTask);

module.exports = taskRouter;