import express, { Request, Response, Express } from 'express';
import 'dotenv/config';
import logger from './utils/logger';
import { knex } from 'knex';
import { configs } from '../db/knexfile';

const db = knex(configs[process.env.NODE_ENV || 'development']);

try {
	db.schema
		.createTable('songs', (table) => {
			table.increments('id');
			table.string('name');
			table.string('artist');
			table.string('spotify_url');
		})
		.then(() => logger.info('Table created'));
} catch (e) {
	logger.error(e);
}

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	res.json('Hello world');
});

app.listen(process.env.PORT, () => {
	logger.info(`App is connected on port ${process.env.PORT}`);
});
