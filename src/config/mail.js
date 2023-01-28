import nodemailer from "nodemailer";
import { environments } from "./dotenv.js";

const {
	MAIL_HOST: host,
	MAIL_PORT: port,
	MAIL_USER: user,
	MAIL_PASS: pass,
} = environments;

export const mail = nodemailer.createTransport({
	host,
	port,
	auth: { user, pass },
});
