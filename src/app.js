require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/v1/search', (req, res) => {
	res.send({message: 'Song to search for'});
});

function getToken = async () => {
	const {data} = await axios.post("https://accounts.spotify.com/api/token",
		`grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`,
		{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		});

	return data["access_token"];
}

app.listen(8080 , () => {
	console.log('Listening on port 8080');
});
