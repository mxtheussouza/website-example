import express, { json } from "express";
import { environments } from "./config/dotenv.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.static("public"));
app.use(json());
app.use(routes);

app.listen(environments.APP_PORT, () =>
	console.log(`✅ Server running on port ${environments.APP_PORT}`),
);
