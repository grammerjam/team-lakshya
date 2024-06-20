import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema( {
    content : {
        type : String ,
        required : true ,
    } ,
    media : {
        type : Schema.Types.ObjectId ,
        ref : "Media" ,
    } ,
    owner : {
        type : Schema.Types.ObjectId ,
        ref : "User" ,
    }
} , { timestamps : true } ) ; 

export const Comment = mongoose.model( "Comment" , commentSchema ) ;