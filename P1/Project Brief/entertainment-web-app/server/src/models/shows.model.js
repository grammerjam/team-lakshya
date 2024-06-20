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
			type: String,
			enum: [
				'Horror',
				'Sports',
				'Medical',
				'Crime',
				'Thriller',
				'Pyschological',
			],
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
		},
		videoFiles: [
			{
				type: String,
				required: true,
			},
		],
		rated: {
			type: String,
			enum: ['U', 'A', 'R'],
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
			type: String,
			enum: ['English', 'Hindi', 'Bengali', 'Maithli'],
		},
		subtitles: {
			type: String,
			enum: ['English', 'Hindi', 'French', 'Tamil'],
		},
		contentAdvisory: {
			type: [String],
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
		},
		episodes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Episode',
			},
		],
	},
	{ timestamps: true }
);

export const Show = mongoose.model('Show', showSchema);
