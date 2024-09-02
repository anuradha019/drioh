import React, { Fragment } from "react";
import { termsOfService } from "../constant";

const TermsOfService = () => {
	return (
		<div className="flex items-center justify-center p-6 sm:p-9 md:p-12 flex-col">
			<div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center items-start gap-3">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-wrap text-center w-full leading-tight">
					{termsOfService.name}
				</h1>
				{termsOfService.description.map((poli, idx) => {
					return (
						<Fragment key={idx + "terms-of-service"}>
							<h1 className="font-bold text-xl md:text-2xl mt-3">
								{poli.title}
							</h1>
							{poli.content.map((cont, idx) => {
								return (
									<p
										key={idx + "cont-terms-of-service"}
										className="opacity-70 leading-7"
									>
										{cont}
									</p>
								);
							})}
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default TermsOfService;
