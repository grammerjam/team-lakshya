import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import { app } from './app.js';
dotenv.config({
	path: './.env',
});

connectDB()
	.then(() => {
		app.on('error', (er) => {
			console.log('error', er);
		});
		app.listen(process.env.PORT, () => {
			console.log(`\n SERVER RUNNING ON ${process.env.PORT} `);
		});
	})
	.catch(() => {
		console.log(' MONGODB CONNECTION FAILED ');
	});
