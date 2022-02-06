const {Router} = require('express');
const taskRouter = require('./taskRouter');

const router = Router();

router.use('/tasks', taskRouter);
// router.use('/users', usersRouter);

module.exports = router;