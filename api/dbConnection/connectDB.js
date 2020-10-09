const { sequelize } = require("./index");
const addData = require("./addData");

module.exports =  async function connectDb() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
        console.log('Database connection OK!');
        await sequelize.sync().then(() => { 
			return addData(sequelize.models);
		});
        console.log('Database got synced!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}