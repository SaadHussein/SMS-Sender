import { useState } from "react";
import "./App.css";
import SendSMSForm from "./components/SendSMSForm";
import SendOTPWithWhatsAppForm from "./components/SendOTPWithWhatsAppForm";

function App() {
	const [selectedForm, setSelectedForm] = useState<string>("SMS");
	return (
		<div className="w-full h-full">
			<div className="fixed flex items-center justify-start gap-4 top-4 left-10">
				<button
					onClick={() => {
						setSelectedForm("SMS");
					}}
					className="text-white bg-blue-500 p-3
				 rounded-md duration-300 hover:bg-blue-400"
				>
					SMS
				</button>
				<button
					onClick={() => {
						setSelectedForm("OTP With Whatsapp");
					}}
					className="text-white bg-blue-500 p-3
				 rounded-md duration-300 hover:bg-blue-400"
				>
					OTP With Whatsapp
				</button>
			</div>
			{selectedForm === "SMS" && <SendSMSForm />}
			{selectedForm === "OTP With Whatsapp" && <SendOTPWithWhatsAppForm />}
		</div>
	);
}

export default App;
