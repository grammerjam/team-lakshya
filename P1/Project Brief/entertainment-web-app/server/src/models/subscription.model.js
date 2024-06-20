import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema( {
    plan : {
        type : String 
    } ,
    price : {
        type : Number ,
    },
    expiry : {
        type : Date ,
    } 
} , { timestamps : true } ) ; 

export const Subscription = mongoose.model( "Subscription" , subscriptionSchema ) ;