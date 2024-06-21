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
			type: [String],
		},
		subtitles: {
			type: [String],
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
