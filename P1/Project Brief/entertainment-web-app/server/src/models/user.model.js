import mongoose, { Schema } from 'mongoose';

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
		watchHistory: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Media',
			},
		],
		subscriptions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Subscription',
			},
		],
		watchList: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Media',
			},
		],
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
