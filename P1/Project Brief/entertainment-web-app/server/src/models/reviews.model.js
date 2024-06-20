import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema( {
    rating : {
        type : Number ,
        enum : [ 5 , 4 , 3 , 2 , 1 ] ,
        required : true ,
    } ,
    content : {
        type : String ,
    }
} , { timestamps : true } ) ; 

export const Review = mongoose.model( "Review" , reviewSchema ) ;