import express from "express";
import dotenv from "dotenv";

dotenv.config();

export const OTPWithWhatsappSender = async (
	req: express.Request,
	res: express.Response
) => {
	const { message } = req.body;

	const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);

	const sendOTPWithWhatsappResponse = await fetch(
		`https://wasage.com/api/otp/?Username=${
			process.env.WASAGE_USERNAME
		}&Password=${process.env.WASAGE_PASSWORD}&Reference=${
			process.env.WASAGE_REFERENCE
		}&Message=${message + ", This is Your OTP: " + randomSixDigitNumber}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const result = await sendOTPWithWhatsappResponse.json();
	console.log(result);
	return res.status(200).json(result);
};
