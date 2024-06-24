import mongoose, { Schema } from 'mongoose';

const mediaSchema = new Schema({
	category : {
		type : String ,
		required : true ,
	},
	show: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shows',
	},
	movie: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie',
	},
	isTrending : {
		type : Boolean , 
		required : true ,
	} ,
	isBookmarked : {
		type : Boolean ,
		required : true ,
	}
});

export const Media = mongoose.model("Media" , mediaSchema) ;