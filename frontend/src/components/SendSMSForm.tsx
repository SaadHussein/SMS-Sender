import { Input } from "antd";
import { Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useMemo, useState } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";
type NotificationPlacement = NotificationArgsProps["placement"];

const Context = React.createContext({ name: "Default" });

const SendSMSForm = () => {
	const [api, contextHolder] = notification.useNotification();
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [language, setLanguage] = useState<number>(0);
	const [message, setMessage] = useState<string>("");

	const openNotification = (placement: NotificationPlacement) => {
		api.info({
			message: `Notification About SMS Sender Form`,
			description: "Inputs are Empty, Please Fill It With Data.",
			placement,
		});
	};

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			phoneNumber === "" ||
			phoneNumber.length !== 11 ||
			language === 0 ||
			message === ""
		) {
			openNotification("topRight");
		} else {
			console.log(phoneNumber, language, message);
		}
	};

	const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
	return (
		<Context.Provider value={contextValue}>
			{contextHolder}
			<div className="flex items-center justify-center w-full h-full">
				<form
					onSubmit={handleSubmitForm}
					className="flex items-center justify-center flex-col"
				>
					<h1 className="text-[32px] font-bold">Sender SMS Form.</h1>
					<div className="mt-4 w-[500px]">
						<label htmlFor="phone-number" className="text-[20px] font-medium">
							Phone Number
						</label>
						<Input
							placeholder="Phone Number"
							value={phoneNumber}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								setPhoneNumber(e.target.value);
							}}
							id="phone-number"
							className="p-2 mt-2"
						/>
						<span>Write Your Number Like This: 011********</span>
					</div>
					<div className="mt-4 w-[500px] flex items-start justify-start flex-col">
						<label htmlFor="language" className="text-[20px] font-medium">
							Language
						</label>
						<Select
							showSearch
							id="language"
							className="w-full h-[45px] mt-2"
							placeholder="Select a Language"
							filterOption={(input, option) =>
								(option?.label ?? "")
									.toLowerCase()
									.includes(input.toLowerCase())
							}
							onChange={(value: string) => {
								setLanguage(+value);
							}}
							options={[
								{ value: "1", label: "English" },
								{ value: "2", label: "Arabic" },
								{ value: "3", label: "Unicode" },
							]}
						/>
					</div>
					<div className="mt-4 w-[500px]">
						<label htmlFor="message" className="text-[20px] font-medium">
							Messgae
						</label>
						<TextArea
							rows={4}
							id="message"
							value={message}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
								setMessage(e.target.value);
							}}
							placeholder="Write Your Message Here"
							className="mt-2"
						/>
					</div>
					<button
						type="submit"
						className="w-full p-2 mt-3 bg-blue-500 text-white rounded-md duration-300 hover:bg-blue-400"
					>
						Submit
					</button>
				</form>
			</div>
		</Context.Provider>
	);
};

export default SendSMSForm;
