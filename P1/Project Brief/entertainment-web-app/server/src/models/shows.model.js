import mongoose, { Schema } from 'mongoose';

const showSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			index: true,
		},
		description: {
			type: String,
			required: true,
		},
		genre: {
			type: [String],
			required : true 
		},
		director: {
			type: String,
			required: true,
		},
		producer: {
			type: String,
			required: true,
		},
		studio: {
			type: String,
			required: true,
		},
		artists: {
			type: [String],
			required : true 
		},
		rated: {
			type: String,
			enum: ['U', 'A', 'R'],
			required : true ,
		},
		reviews: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Review',
			},
		],
		year: {
			type: Number,
			required: true,
		},
		audioLanguages: {
			type: [String],
			required : true ,
		},
		subtitles: {
			type: [String],
			required : true ,
		},
		contentAdvisory: {
			type: [String],
			required : true ,
		},
		likes: {
			type: Schema.Types.ObjectId,
			ref: 'Like',
		},
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
		duration: {
			type: Number,
			required : true ,
		},
		episodes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Episode',
			},
		],
		isTrending: {
			type: Boolean,
			required: true,
		},
		isBookmarked: {
			type: Boolean,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Show = mongoose.model('Show', showSchema);
