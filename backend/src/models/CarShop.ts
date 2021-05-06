import {Schema,model} from 'mongoose';
import ICarShop from '../interfaces/carShop';
const carsShopSchema = new Schema({
    products: {
        type: [],
        required: true
    },
    id_car:{
        type:Number,
        required:true
    }
});
export default model<ICarShop>('CarShop', carsShopSchema);
