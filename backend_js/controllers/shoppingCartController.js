const ShoppingCart = require('../models/shoppingCart')

exports.createCars = async (req, res) => {
    try {
        let cars;
        cars = new ShoppingCart(req.body);
        //guardar Carro
        await cars.save();
        res.status(200).send('Success');

    } catch (error) {
        res.status(400).send('hubo un error');
    }
}
exports.deleteCar = async (req, res) => {
    try {
        let response = await ShoppingCart.deleteOne({ id_car: req.body.id_car });
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
}
exports.putShoppingCart = async (req, res) => {
    try {
        let response = await ShoppingCart.updateOne(
            { id_car: req.body.id_car },
            req.body
        );
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
}
exports.getCars = async (req, res) => {
    try {
        const lists = await ShoppingCart.find();
        res.status(200).send(lists);

    } catch (error) {
        res.status(400).send('hubo un error');
    }
}
