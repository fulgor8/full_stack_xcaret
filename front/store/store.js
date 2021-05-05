import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
const initialState={}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;