const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const DUMMY_DATA = {
	firstName : 'Jimmy',
	lastName  : 'Oliva',
	age       : 27
};

app.get('/api', (req, res) => {
	console.log('Request Received');
	console.log(req.body);
	res.send(DUMMY_DATA);
});

app.listen(3000);
