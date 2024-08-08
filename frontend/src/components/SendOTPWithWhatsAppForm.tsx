import { Input } from "antd";
import { useState } from "react";

const SendOTPWithWhatsAppForm = () => {
	const [message, setMessage] = useState<string>("");
	const [resultCode, setResultCode] = useState<string>("");
	const [otpLink, setOtpLink] = useState<string>("");
	const [otpQR, setOtpQR] = useState<string>("");
	const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const responseResult = await fetch(
			"http://localhost:3000/otp/whatsapp/send",
			{
				method: "POST",
				body: JSON.stringify({
					message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const result = await responseResult.json();

		if (result.Code === "5500") {
			setResultCode(result.Code);
			setOtpLink(result.Clickable);
			setOtpQR(result.QR);
		}
	};
	return (
		<div className="flex items-center justify-center w-full h-full flex-col">
			<form
				onSubmit={handleSubmitForm}
				className="flex items-center justify-center flex-col"
			>
				<h1 className="text-[32px] font-bold">OTP With Whatsapp Form.</h1>
				<div className="mt-4 w-[500px]">
					<label htmlFor="optional-message" className="text-[20px] font-medium">
						Optional Message
					</label>
					<Input
						placeholder="Write Optional Message If You Want."
						value={message}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setMessage(e.target.value);
						}}
						id="optional-message"
						className="p-2 mt-2"
					/>
				</div>

				<button
					type="submit"
					className="w-full p-2 mt-3 bg-blue-500 text-white rounded-md duration-300 hover:bg-blue-400"
				>
					Submit
				</button>
			</form>

			{resultCode === "5500" && (
				<>
					<div className="mt-10 flex items-center justify-center gap-12">
						<img
							src={otpQR}
							alt="OTP QR Code"
							className="w-[300px] h-[300px]"
						/>
						<a
							className="text-[24px] text-blue-800 font-semibold duration-300 hover:text-blue-600"
							href={otpLink}
						>
							Click Here To Get OTP From Whatsapp.
						</a>
					</div>
					<button
						onClick={() => {
							setMessage("");
							setOtpLink("");
							setOtpQR("");
							setResultCode("");
						}}
						className="mt-8 text-white bg-blue-600 p-4 rounded-lg text-[21px] font-medium duration-300 hover:bg-blue-500"
					>
						Send New ?
					</button>
				</>
			)}
		</div>
	);
};

export default SendOTPWithWhatsAppForm;
