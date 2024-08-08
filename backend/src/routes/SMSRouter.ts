import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { smsSender } from "../controllers/SMSController";

dotenv.config();

export default (router: express.Router) => {
	router.post("/sms/send", smsSender);
};
