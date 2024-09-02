import React, { Fragment } from "react";
import { contactDetails } from "../constant";

const ContactInformation = () => {
	return (
		<div className="flex items-center justify-center p-6 sm:p-9 md:p-12 flex-col">
			<div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center items-start gap-3">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-wrap text-center w-full leading-tight">
					{contactDetails.name}
				</h1>
				<p className="opacity-70 leading-7 my-4">
					Reach us at - {contactDetails.mobile}
				</p>
			</div>
		</div>
	);
};

export default ContactInformation;
