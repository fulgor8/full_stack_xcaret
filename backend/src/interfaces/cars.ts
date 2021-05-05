import { Document } from 'mongoose'
export default interface ICars extends Document {
    name:String;
    maker:String;
    car_type:String;
    price_mxn:Number;
    price_usd:Number;
    description_es:String;
    description_en:String;
    models:[];
}