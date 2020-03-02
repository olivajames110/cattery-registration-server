const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb+srv://catpurrccinos:peanut225@cattery-registration-oiko3.mongodb.net/places_test?retryWrites=true&w=majority').then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log('Something went wrong  ');
});

const createProduct = async (req,res,next) => {
    console.log('create product run');
    
    const createdProduct = new Product({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dataUrl: req.body.dataUrl,

    })
    
    console.log(createdProduct);
    const result = await createdProduct.save();
    console.log('Result' , result);

    res.json(result);
}

const getProducts = async (req,res,next) => {
    console.log('get product run');
    const products = await Product.find().exec();
    console.log(products[1].id);
    res.json(products);
}
const deleteUser = async (req,res,next) => {
    console.log('delete product run');
    const products = await Product.find().exec();
    let userToDelete = req.body.user.id
    const newList = products.filter(user => {
        user.id !== products[i].id
    })
    res.json(newList);
}

exports.deleteUser = deleteUser;
exports.getProducts = getProducts;
exports.createProduct = createProduct;