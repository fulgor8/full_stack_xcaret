import { combineReducers } from 'redux';
import productsReducers from './productsReducers';
import carsReducers from './carsReducers';
// exportamos todos los reducers en caso de que tenga mas, en mi caso se llama productos mi state
export default combineReducers({
    productos:productsReducers,
    car:carsReducers

});