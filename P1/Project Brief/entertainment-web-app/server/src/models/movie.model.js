import mongoose , { Schema } from "mongoose" ;

const movieSchema = new Schema({

} , { timestamps : true } ) ;

export const Movie = mongoose.model('Movie' , movieSchema ) ; 