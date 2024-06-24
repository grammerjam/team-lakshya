import mongoose , { Schema } from 'mongoose' ;

const thumbnailSchema = new Schema({
    small: { 
        type: String, 
        required: true 
    },
    medium: { 
        type: String, 
        required: true 
    },
    large: { 
        type: String, 
        required: true 
    },
},{ _id: false } );


const episodeSchema = new Schema( {
    videoFile : {
        type : String ,
        required : true ,
    } ,
    thumbnail : {
        type : thumbnailSchema ,
        required : true ,
    },
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