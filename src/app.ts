import express, { Request, Response, Express } from 'express';
import 'dotenv/config';
import logger from './utils/logger';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.json('Hello world');
});

app.listen(process.env.PORT, () => {
  logger.info(`App is connected on port ${process.env.PORT}`);
});
