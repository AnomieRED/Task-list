const mongoose = require('mongoose');

const DB_CONNECT = process.env.DB_CONNECT;

async function startMongo() {
	try {
		await mongoose.connect(DB_CONNECT, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`Successfylly connected to database`);
	} catch (error) {
		console.error(`Server error: ${error.message}`);
	}
}

startMongo();

module.exports = mongoose;
