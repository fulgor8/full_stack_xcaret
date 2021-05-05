import {
    AGREGAR_PRODUCTO,
    LISTADO_PRODUCTOS
} from '../types'
// cada reducer tiene su propio state en caso de tener mas
const initialState = {
    currency: "mxn",
    client: {
        firstName:"firstName",
        lastName:'lastName',
        products:[]
    },
    products: [],
    listProducts: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                client: action.payload
            }
        case LISTADO_PRODUCTOS:
            return {
                ...state,
                listProducts: action.payload
            }
        default:
            return state;
    }
}