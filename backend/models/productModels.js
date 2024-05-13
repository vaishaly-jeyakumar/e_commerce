const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price:String,
    description:String,
    ratings:String,
    images : [
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createdAt:Date
});
const productmodel = mongoose.model('Product', productSchema);
module.exports = productmodel;