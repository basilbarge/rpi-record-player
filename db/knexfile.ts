import { Knex } from "knex";

let configs: Record<string, Knex.Config> = {
  development: {
	client: 'mysql2',
	connection: {
		host: '127.0.0.1',
		port: 3306,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: 'rpi_record_player_dev'
	}
  },
};

export { configs };
