const Cars = require('../models/Cars')
exports.createCars = async (req, res) => {
    try {
        let cars;
        cars = new Cars(req.body);
        //guardar Carro
        await cars.save();
        res.status(200).send('Success');

    } catch (error) {
        res.status(400).send('hubo un error');
    }
}
exports.getCars = async (req, res) => {
    try {
        const lists = await Cars.find();
        res.status(200).send(lists);

    } catch (error) {
        res.status(400).send('hubo un error');
    }
}
