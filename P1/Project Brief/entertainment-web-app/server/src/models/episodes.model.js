import mongoose , { Schema } from 'mongoose' ;

const episodeSchema = new Schema( {
    name : {
        type : String ,
        required : true ,
    } ,
    description : {
        type : String ,
        required : true ,
    } ,
    duration : {
        type : Number ,
        required : true ,
    }
} , { timestamps : true } ) ; 

export const Episode = mongoose.model( "Episode" , episodeSchema ) ;