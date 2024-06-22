import mongoose , { Schema } from "mongoose" ;

const movieSchema = new Schema({
    title : {
        type : String ,
        required : true ,
        index : true ,
    },
    description : {
        type : String , 
        required : true ,
    } ,
    genre : {
        type : [String] ,
        required : true 
    } ,
    director : {
        type : String ,
        required : true ,
    } ,
    producer : {
        type : String , 
        required : true ,
    } ,
    studio : {
        type : String ,
        required : true ,
    },
    artists : {
        type : [ String ] ,
        required : true ,
    } ,
    videoFile : {
        type : String ,
        required : true ,
    } ,
    thumbnail : {
        type : String ,
        required : true ,
    },
    rated : {
        type : String ,
        enum : [ "U" , "A" , "R" ] ,
        rqeuired : true ,
    } ,
    reviews : [
        {
            type : Schema.Types.ObjectId ,
            ref : "Review"
        }
    ] ,
    year : {
        type : Number ,
        required : true ,
    } ,
    audioLanguages : {
        type : [String] ,
        required : true ,
    } ,
    subtitles : {
        type : [String] ,
        required : true ,
    } ,
    contentAdvisory : {
        type : [ String ] ,
        required : true ,
    } ,
    likes : {
        type : Schema.Types.ObjectId ,
        ref : "Like"
    } ,
    comments : [
        {
            type : Schema.Types.ObjectId ,
            ref : "Comment"
        }
    ] , 
    duration : {
        type : Number, 
        required : true ,
    }
} , { timestamps : true } ) ;

export const Movie = mongoose.model('Movie' , movieSchema ) ; 