import mongoose , {Schema} from "mongoose" ;

const UserSchema = new Schema({
    
} , {timestamps : true} ) ; 

export const User = mongoose.model('User' , UserSchema) ;