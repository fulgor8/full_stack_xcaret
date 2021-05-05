import {
    AGREGAR_PRODUCTO,
    LISTADO_PRODUCTOS
} from '../types';
import clienteAxios from '../config/exios'
//crear pago producto
export function pagoProducto(client){
    return async (dispatch)=>{
        try {
            dispatch(agregarProducto(client));

        } catch (error) {
            console.log(error);
        }
    }
}
const agregarProducto = client=>({
    type:AGREGAR_PRODUCTO,
    payload:client
})

/// funcion para getList cars
export function listCars(){
    return async (dispatch)=>{
        try {
            const respuesta = await clienteAxios.get('api/getListCars');
            dispatch(getCars(respuesta.data));
           
        } catch (error) {
            console.log(error);
        }
       
    }
}
const getCars = listProducts=>({
    type:LISTADO_PRODUCTOS,
    payload:listProducts
})