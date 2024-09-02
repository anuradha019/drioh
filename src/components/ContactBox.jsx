import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const ContactBox = () => {
	const [state, handleSubmit] = useForm("mkgwylez");
	if (state.succeeded) {
		return (
			<div className="w-full min-full mb-4 sm:mb-8">
				<div className="flex items-center justify-center w-full h-full">
					<div className="w-[85%] sm:w-[60%] mt-16 min-w-72 flex flex-col justify-center items-center gap-3">
						<h1 className="font-bold text-xl">
							Thank you for reaching out to us 😊.
						</h1>
						<p className="text-center">
							We will get back to you as soon as possible.
						</p>
						<a href={"/"}>
							<button className="mt-2 py-2 sm:py-3 px-4 sm:px-6  rounded-xl border outline-1 btn-style  text-white/80">
								Home
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-start gap-5 mt-8 w-full"
		>
			<div className="flex gap-4">
				<input
					type="name"
					name="name"
					required
					placeholder="Name"
					className="w-1/2 py-2 border border-white bg-transparent px-3"
				/>
				<input
					type="email"
					name="email"
					required
					placeholder="Email *"
					className="w-1/2 py-2 border border-white bg-transparent px-3"
				/>
			</div>

			<input
				type="number"
				name="number"
				required
				placeholder="Phone number"
				className=" py-2 border border-white bg-transparent px-3"
			/>

			<textarea
				rows="4"
				name="message"
				required
				placeholder="Comment"
				className=" py-2 border border-white bg-transparent px-3"
			/>
			<ValidationError
				prefix="Full Name"
				field="name"
				errors={state.errors}
				className="text-red-800"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
				className="text-red-800"
			/>
			<ValidationError
				prefix="Number"
				field="number"
				errors={state.errors}
				className="text-red-800"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
				className="text-red-800"
			/>
			<button
				type="submit"
				disabled={state.submitting}
				className="bg-color-yellow text-black py-2.5 rounded-lg mt-5 w-32"
			>
				{state.submitting ? "Loading..." : "Send"}
			</button>
		</form>
	);
};

export default ContactBox;
