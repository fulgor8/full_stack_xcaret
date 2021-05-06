import { RequestHandler } from "express";
import ShoppingCart from "../models/shoppingCart";

export const getCars: RequestHandler = async (req, res) => {
    try {
        const lists = await ShoppingCart.find();
        res.status(200).send(lists);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
};

// eliminar carro
export const deleteCar: RequestHandler = async (req, res) => {
    try {
        let response = await ShoppingCart.deleteOne({ id_car: req.body.id_car });
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
};
export const createCar: RequestHandler = async (req, res) => {
    try {
        let cars;
        cars = new ShoppingCart(req.body);
        let response = await cars.save();
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
};
//update Carro
export const putShoppingCart: RequestHandler = async (req, res) => {
    try {
        let response = await ShoppingCart.updateOne(
        { id_car: req.body.id_car },
        req.body
        );
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
};
