import { environments, mail } from "../config/index.js";

export const sendMail = (req, res) => {
	const { MAIL_USER: user } = environments;
	const { email, name, subject, message } = req.body;

	const mailOptions = {
		from: email,
		to: user,
		subject: `Mensagem de ${name}: ${subject}`,
		html: `<p>${message}</p>`,
		replyTo: email,
	};

	mail.sendMail(mailOptions, error => {
		if (!!error) {
			res.status(500).send("Ocorreu um erro, tente novamente mais tarde.");
		}

		return res.status(200).send("Email enviado com sucesso.");
	});
};
