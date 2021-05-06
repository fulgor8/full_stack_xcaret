import { Document } from 'mongoose'
export default interface ICarShop extends Document {
    products:[{}] ;
    id_car:Number
}