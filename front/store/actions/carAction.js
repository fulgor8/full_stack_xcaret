import { CREAR_CARRITO } from '../types';
import clienteAxios from '../config/exios'
//crear pago producto
export function createCar(car) {
    return async (dispatch) => {
        try {
            dispatch(newCar(car));
            const respuesta = await clienteAxios.post('api/ShoppingCart', car);
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
            const respuesta = await clienteAxios.put('api/putShoppingCart', car);
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

