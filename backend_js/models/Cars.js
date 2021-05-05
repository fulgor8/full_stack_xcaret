const mongoose = require('mongoose');

const CarsSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique:true
    },
    maker: {
        type: String,
        required: true
    },
    car_type: {
        type: String,
        required: true
    },
    price_mxn: {
        type: Number,
        required: true
    },
    price_usd: {
        type: Number,
        required: true
    },
    description_es: {
        type: String,
        required: true
    },
    description_en: {
        type: String,
        required: true
    },
    models:{
        type: Array,
    }
})
module.exports = mongoose.model('Cars', CarsSchema);