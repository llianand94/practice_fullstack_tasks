const express = require('express');
const router = require('./router');
const { errorCatcher } = require('./middlewares/errorCatcher.mw');


const app = express();
app.use(express.json());
app.use('/', router);
app.use(errorCatcher);



module.exports = app;