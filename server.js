const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoosePractice = require('./mongoose')


const DUMMY_DATA = {
	firstName : 'Jimmy',
	lastName  : 'Oliva',
	age       : 27
};

const server = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//testing

app.post('/add-user' , mongoosePractice.createProduct)


app.get('/all-users', mongoosePractice.getProducts)
app.get('/delete-user', mongoosePractice.deleteUser)

// app.post('/products' , mongoosePractice.createProduct)

// --------

//working
// app.post('/add-user', (req, res) => {
// 	console.log('Request Received');
// 	// console.log(req);
// 	console.log(req.body);
// 	const newPerson = req.body;
// 	server.push(newPerson);
// 	// const updatedServer = { ...server, newPerson };
// 	res.send(server);
// });

// app.get('/all-users', (req, res) => {
// 	res.send(server);
// });

app.listen(5000);
