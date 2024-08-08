import express from "express";
import dotenv from "dotenv";

dotenv.config();

export const smsSender = async (
	req: express.Request,
	res: express.Response
) => {
	const { mobile, language, message } = req.body;

	const sendSMSResponse = await fetch(
		`https://smsmisr.com/api/SMS/?environment=2&username=${
			process.env.API_USERNAME
		}&password=${process.env.API_PASSWORD}&language=${+language}&sender=${
			process.env.SENDER
		}&mobile=${mobile}&message=${message}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const result = await sendSMSResponse.json();
	console.log(result);
	return res.status(200).json(result);
};
