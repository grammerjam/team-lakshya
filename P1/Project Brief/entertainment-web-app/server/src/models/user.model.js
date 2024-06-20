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
const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			index: true,
			lowercase: true,
		},
		fullName: {
			type: String,
		},
		password: {
			type: String,
			required: true,
			unique: true,
		},
		watchHistory: {
			type: [mediaSchema],
		},
		subscriptions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Subscription',
			},
		],
		watchList: {
			type: [mediaSchema],
		},
		avatar: {
			type: String,
		},
		refreshTokens: {
			type: String,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model('User', UserSchema);
