import "dotenv/config";

export const environments = {
	APP_PORT: process.env.APP_PORT,
	MAIL_HOST: process.env.MAIL_HOST,
	MAIL_PORT: process.env.MAIL_PORT,
	MAIL_USER: process.env.MAIL_USER,
	MAIL_PASS: process.env.MAIL_PASS,
};
