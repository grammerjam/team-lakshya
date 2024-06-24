import User from '../models/user.model.js';

const registerUser = async ( req , res ) => {
    // registration logic  
    try {
        const { username , email , password } = req.body ;
        
    } catch( error ) {

    }

};

const getUser = async ( req , res ) => {
    // login logic  
    try {
        const { username , email , password } = req.body ;
        
    } catch( error ) {

    }

};

export { registerUser , getUser } ;
