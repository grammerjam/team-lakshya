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
        type : String ,
        enum : [ "Horror" , "Sports" , "Medical" , "Crime" , "Thriller" , "Pyschological" ] 
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
    } ,
    videoFile : {
        type : String ,
        required : true ,
    } ,
    rated : {
        type : String ,
        enum : [ "U" , "A" , "R" ] ,
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
        type : String ,
        enum : [ "English" , "Hindi" , "Bengali" , "Maithli" ] 
    } ,
    subtitles : {
        type : String , 
        enum : [ "English" , "Hindi" , "French" , "Tamil" ] 
    } ,
    contentAdvisory : {
        type : [ String ] 
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
    ]
} , { timestamps : true } ) ;

export const Movie = mongoose.model('Movie' , movieSchema ) ; 