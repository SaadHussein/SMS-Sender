import express from "express";

import SMSRouter from "./SMSRouter";
import OTPWithWhatsapp from "./OTPWithWhatsapp";

export default (APIRouter: express.Router): express.Router => {
	SMSRouter(APIRouter);
	OTPWithWhatsapp(APIRouter);

	return APIRouter;
};
