const express = require('express');

const app = express();

app.get('/api/v1/search', (req, res) => {
	res.send({message: 'Song to search for'});
});

app.listen(8080 , () => {
	console.log('Listening on port 8080');
});
