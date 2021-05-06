import {Schema,model} from 'mongoose';
import IShoppingCart from '../interfaces/shoppingCart';
const shoppingCartSchema = new Schema({
    products: {
        type: [],
        required: true
    },
    id_car:{
        type:Number,
        required:true
    }
});
export default model<IShoppingCart>('shopping_cart', shoppingCartSchema);
