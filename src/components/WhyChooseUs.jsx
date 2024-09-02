import React from "react";

const WhyChooseUs = () => {
	return (
		<div className="flex items-start justify-center gap-10 p-6 sm:p-9 md:p-12 flex-col">
			<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
				Why Choose Us?
			</h1>
			<div className="flex gap-8 justify-center flex-wrap w-full">
				<div className="flex flex-col gap-3 p-6 bg-color-card rounded-md w-full md:w-1/3 lg:w-1/4 text-center">
					<h3 className="font-bold text-xl md:text-2xl">
						Hassle-free experience
					</h3>
					<p className="opacity-70 leading-7">
						We offer a unique combination of convenience,
						eco-friendliness, and exceptional service quality.
					</p>
				</div>
				<div className="flex flex-col gap-3 p-6 bg-color-card rounded-md w-full md:w-1/3 lg:w-1/4 text-center">
					<h3 className="font-bold text-xl md:text-2xl">
						Daily Maintenance
					</h3>
					<p className="opacity-70 leading-7">
						We're here every day to make sure your car always looks
						its best, offering top-notch cleaning services
					</p>
				</div>
				<div className="flex flex-col gap-3 p-6 bg-color-card rounded-md w-full md:w-1/3 lg:w-1/4 text-center">
					<h3 className="font-bold text-xl md:text-2xl">
						Skilled and Dedicated Team
					</h3>
					<p className="opacity-70 leading-7">
						Our team consists of highly trained professionals who
						are passionate about exceeding your expectations.
					</p>
				</div>
				<div className="flex flex-col gap-3 p-6 bg-color-card rounded-md w-full md:w-1/3 lg:w-1/4 text-center">
					<h3 className="font-bold text-xl md:text-2xl">
						Time Value
					</h3>
					<p className="opacity-70 leading-7">
						We take immense pride in delivering superior services
						that are worth every penny.
					</p>
				</div>
				<div className="flex flex-col gap-3 p-6 bg-color-card rounded-md w-full md:w-1/3 lg:w-1/4 text-center">
					<h3 className="font-bold text-xl md:text-2xl">
						24/7 Support
					</h3>
					<p className="opacity-70 leading-7">
						Our on-demand service ensures that you receive prompt
						and efficient assistance whenever and wherever you need
						it.
					</p>
				</div>
				<div className="flex flex-col gap-3 p-6 bg-color-card rounded-md w-full md:w-1/3 lg:w-1/4 text-center">
					<h3 className="font-bold text-xl md:text-2xl">
						Your Satisfaction, Our Priority
					</h3>
					<p className="opacity-70 leading-7">
						We are committed to making your car maintenance
						experience stress-free, efficient, and enjoyable.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
