import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { OTPWithWhatsappSender } from "../controllers/OTPWithWhatsappController";

dotenv.config();

export default (router: express.Router) => {
	router.post("/otp/whatsapp/send", OTPWithWhatsappSender);
};
