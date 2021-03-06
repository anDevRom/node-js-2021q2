import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import tasksRouter from './resources/tasks/task.router';
import { logger, uncaughtExceptionLogger, unhandledRejectionLogger } from './logger';
import { errorHandler } from './errorHandler';

process.on('uncaughtExceptionMonitor', uncaughtExceptionLogger);
process.on('unhandledRejection', unhandledRejectionLogger);

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/', logger(false));

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', tasksRouter);

app.use('/', errorHandler);

export default app;
