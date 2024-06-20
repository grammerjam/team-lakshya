import mongoose, { Schema } from 'mongoose';
import Media from './media.model';

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
			type: [Media],
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
