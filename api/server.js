require("dotenv").config();

const express = require("express");
const connectDB = require("./dbConnection/connectDB");
const { UserRoutes } = require("./user/routes");
const { authenticate } = require("./filters");
const { BookRoutes } = require("./book/routes");

const app = express();
const PORT = 8080;

// support json data in request body
app.use(express.json());

app.use("/users", UserRoutes);
app.use("/books", authenticate, BookRoutes);

async function runServer() {
	await connectDB();

	app.listen(PORT);
}

runServer();