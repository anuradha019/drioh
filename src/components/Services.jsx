import React from "react";
import { servicesDetails } from "../constant";

const Services = () => {
	return (
		<div className="flex gap-6 flex-wrap lg:flex-nowrap">
			{servicesDetails.map((service) => {
				return (
					<div
						key={service.title}
						className="flex flex-col gap-3 p-6 bg-color-card rounded-md max-w-1/3"
					>
						<img src={service.image} alt="card" />
						<h3 className="font-bold text-2xl text-nowrap">
							{service.title}
						</h3>
						<p className="opacity-70 leading-7">
							{service.description}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Services;
