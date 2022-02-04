const {Router} = require('express');
const tasksRouter = require('./tasksRouter');

const router = Router();
router.use('/tasks', tasksRouter);

module.exports = router;