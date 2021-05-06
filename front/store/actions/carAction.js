import { CREAR_CARRITO } from '../types';
import clienteAxios from '../config/exios';
//crear carrito producto
export function createCar(car) {
    return async (dispatch) => {
        try {
            dispatch(newCar(car));
            const respuesta = await clienteAxios.post('api/createCarShop', car);
            console.log(respuesta.data);

        } catch (error) {
            console.log(error);
        }
    }
}
// update
export function updateCar(car) {
    return async (dispatch) => {
        try {
            dispatch(newCar(car));
            const respuesta = await clienteAxios.put('api/putCarShop', car);
            console.log(respuesta.data);

        } catch (error) {
            console.log(error);
        }
    }
}
const newCar = car => ({
    type: CREAR_CARRITO,
    payload: car
})

