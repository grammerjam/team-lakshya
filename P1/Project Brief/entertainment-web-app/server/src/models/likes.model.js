import mongoose, { Schema } from 'mongoose';

const likeSchema = new Schema( {
    review : {
        type : Schema.Types.ObjectId ,
        ref : "Review"

    },
    comment : {
        type : Schema.Types.ObjectId ,
        ref : "Comment" ,
    } ,
    media : {
        type : Schema.Types.ObjectId ,
        ref : "Media" ,
    } ,
    likedBy : {
        type : Schema.Types.ObjectId ,
        ref : "User" ,
    }
} , { timestamps : true } ) ; 

export const Like = mongoose.model( "Like" , likeSchema ) ;