import React from "react";
import ContactBox from "../components/ContactBox";

const Contact = () => {
	return (
		<div className="flex items-center justify-center p-6 sm:p-9 md:p-12 flex-col">
			<div className="md:w-1/2 flex flex-col justify-center items-start gap-3">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-nowrap">
					Contact
				</h1>
				<h1 className="font-bold text-2xl sm:text-3xl md:text-4xl opacity-70">
					Request for cleaning demo now!
				</h1>
				<ContactBox />
			</div>
		</div>
	);
};

export default Contact;
