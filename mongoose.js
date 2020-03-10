const mongoose = require('mongoose');

const Product = require('./models/product');

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

const createProduct = async (req, res, next) => {
	console.log('create product run');

	const createdProduct = new Product({
		visitType: req.body.visitType,
		minors: [
			{
				// id: req.body.minors.id,
				firstName: req.body.minors[0].firstName,
				lastName: req.body.minors[0].lastName,
				dob_year: req.body.minors[0].dob_year,
				dob_month: req.body.minors[0].dob_month,
				dob_day: req.body.minors[0].dob_day
			}
		],
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		dataUrl: req.body.dataUrl,
		dob_year: req.body.dob_year,
		dob_month: req.body.dob_month,
		dob_day: req.body.dob_day,
		email: req.body.email
	});

	console.log(createdProduct);
	const result = await createdProduct.save();
	// console.log('Result' , result);

	res.json(result);
};

const getProducts = async (req, res, next) => {
	console.log('get product run');
	const products = await Product.find().exec();
	// console.log(products[1].id);
	res.json(products);
};
const deleteUser = async (req, res, next) => {
	console.log('delete product run');
	console.log(req.body.params);
	let id = req.body.params;
	const oldList = await Product.find().exec();
	Product.deleteOne({ _id: id }).exec();
	const newList = await Product.find().exec();
	// const newList = products.filter(user => {
	//     return user.id !== id
	// })
	console.log(oldList.length);
	// console.log(products.length);
	console.log(newList.length);

	res.json(newList);
};

exports.deleteUser = deleteUser;
exports.getProducts = getProducts;
exports.createProduct = createProduct;
