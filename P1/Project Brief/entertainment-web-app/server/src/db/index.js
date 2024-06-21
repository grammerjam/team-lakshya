import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectDB = async () => {
	const MONGODB = `${process.env.MONGODB_URI}/${DB_NAME}`;
	try {
		const instance = await mongoose.connect(MONGODB);
		console.log(
			`\n  MONGODB CONNECTION SUCCESSFUL !! ${instance.connection.host} `
		);
	} catch (error) {
		console.log(error);
	}
};
