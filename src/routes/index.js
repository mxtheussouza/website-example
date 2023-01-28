import { Router } from "express";

const routes = Router();

import * as MailController from "../controllers/MailController.js";

routes.get("/", res => res.sendFile(`${__dirname}/public/index.html`));
routes.post("/", MailController.sendMail);

export default routes;
