const mongoose = require('mongoose');
const ShoppingCartSchema = mongoose.Schema({
    products: {
        type: [],
        required: true
    },
    id_car:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('shopping_cart', ShoppingCartSchema);