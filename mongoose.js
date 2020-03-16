const mongoose = require('mongoose');

const User = require('./models/User');

mongoose
	.connect(
		'mongodb+srv://catpurrccinos:peanut225@cattery-registration-oiko3.mongodb.net/places_test?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connected to database');
	})
	.catch(() => {
		console.log('Something went wrong  ');
	});

const addUser = async (req, res, next) => {
	console.log('create User run');

	const createdUser = new User({
		// id: req.body.id,
		visitType: req.body.visitType,
		minors: req.body.minors,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		dataUrl: req.body.dataUrl,
		dob_year: req.body.dob_year,
		dob_month: req.body.dob_month,
		dob_day: req.body.dob_day,
		email: req.body.email
	});

	console.log(createdUser);
	const result = await createdUser.save();
	// console.log('Result' , result);

	res.json(result);
};

const getUsers = async (req, res, next) => {
	console.log('get User run');
	const Users = await User.find().exec();
	// console.log(Users[1].id);
	res.json(Users);
};

const getUser = async (req, res, next) => {
	let id = req.query.id;
	console.log('req id: ', id);
	const foundUser = await User.findOne({ _id: id }).exec();
	console.log(foundUser);
	res.json(foundUser);
};

const searchUser = async (req, res, next) => {
	// let id = req.query.id;
	console.log('SEARCH req.query: ', req.query.val);
	const foundUser = await User.findOne({ firstName: req.query.val }).exec();
	const allUsers = await User.find().exec();
	let result;
	console.log(foundUser);
	console.log('LENGTH', foundUser.id.length);
	if (foundUser.id.length > 1) {
		// result = foundUser;
		res.json(foundUser);
	} else {
		rres.json(allUsers);
	}

	// res.json(req.query.val);
};

const deleteUser = async (req, res, next) => {
	console.log('delete User run');
	console.log(req.body.params);
	let id = req.body.params;
	const oldList = await User.find().exec();
	User.deleteOne({ _id: id }).exec();
	const newList = await User.find().exec();
	// const newList = Users.filter(user => {
	//     return user.id !== id
	// })
	console.log(oldList.length);
	// console.log(Users.length);
	console.log(newList.length);

	res.json(newList);
};

exports.deleteUser = deleteUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.searchUser = searchUser;
exports.addUser = addUser;
