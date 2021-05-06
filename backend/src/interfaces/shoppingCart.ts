import { Document } from 'mongoose'
export default interface IShoppingCart extends Document {
    products:[{}] ;
    id_car:Number
}