import mongoose, { Schema } from 'mongoose';

const mediaSchema = new Schema({
	show: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Shows',
	},
	movie: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie',
	},
});

export const Media = mongoose.model("Media" , mediaSchema) ;