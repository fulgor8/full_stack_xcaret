import { RequestHandler } from "express";
import Cars from "../models/Cars";

export const getCars: RequestHandler = async (req, res) => {
    try {
        const lists = await Cars.find();
        res.status(200).send(lists);
    } catch (error) {
        res.status(400).send("hubo un error");
    }
};

export const deleteCar: RequestHandler = (req, res) => {
    res.send("deleteCar cARSS ccc");
};

export const createCar: RequestHandler = async (req, res) => {
    try {
        let cars;
        cars = new Cars(req.body);
        //guardar Carro
        await cars.save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(400).send("hubo un error");
    }
};
