require('dotenv').config();
const express = require('express');
const axios = require('axios');
const config = require('./config');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/v1', (req, res) => {
	res.json({message: 'Hello World 🌎'});
})

app.get('/api/v1/search/:song', async (req, res) => {
	if (!config.token) {
		await getToken();
	}

	const songs = await axios.get(`https://api.spotify.com/v1/search?q=${req.params.song}`, {
		headers: {
			'Authorization': `Bearer ${config.token}`,
		}
	});

	res.json(songs);
});

const getToken = async () => {
	const {data} = await axios.post("https://accounts.spotify.com/api/token",
		`grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
		{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		});

	config.token = data["access_token"];
}

app.listen(8080 , () => {
	console.log('Listening on port 8080');
});
