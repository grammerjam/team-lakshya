import mongoose, { Schema } from 'mongoose';

const watchlistSchema = new Schema({
	media: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Media',
	},
} , { timestamps : true } ) ;

export const Watchlist = mongoose.model("Watchlist" , watchlistSchema) ;