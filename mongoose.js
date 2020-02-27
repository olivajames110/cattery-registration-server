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
        name: req.body.name,
        price: req.body.price
    })
    
    console.log(createdProduct);
    const result = await createdProduct.save();
    console.log('Result' , result);

    res.json(result);
}

exports.createProduct = createProduct;