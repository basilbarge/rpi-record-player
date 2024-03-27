import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json('Hello world');
});

app.listen(process.env.PORT, () => {
  console.log('App listening on port 3000');
});
