import express, {json} from "express";
import chalk from 'chalk'
import dotenv from "dotenv";
dotenv.config();

import router from "./routes/index.js";

const app = express();

app.use(json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
	console.log(chalk.bold.green('Server running on port ' + process.env.PORT))
})