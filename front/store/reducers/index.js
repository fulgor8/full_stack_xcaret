import { combineReducers } from 'redux';
import productsReducers from './productsReducers';
// exportamos todos los reducers en caso de que tenga mas, en mi caso se llama productos mi state
export default combineReducers({
    productos:productsReducers
});