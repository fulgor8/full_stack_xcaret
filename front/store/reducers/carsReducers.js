import {
    AGREGAR_CARRITO,
    ELIMINAR_CARRITO,
    CREAR_CARRITO
} from '../types'
// cada reducer tiene su propio state en caso de tener mas
const initialState = {
    id_car: Math.floor(Math.random() * 9999),
    products: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREAR_CARRITO:
            return {
                ...state,
                id_car: action.payload.id_car,
                products:action.payload.products
            
            }
        case ELIMINAR_CARRITO:
            return {
                ...state,
                listProducts: action.payload
            }
        default:
            return state;
    }
}