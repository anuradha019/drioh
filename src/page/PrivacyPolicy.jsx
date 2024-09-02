import React, { Fragment } from "react";
import { privacyPolicy } from "../constant";

const PrivacyPolicy = () => {
	return (
		<div className="flex items-center justify-center p-6 sm:p-9 md:p-12 flex-col">
			<div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center items-start gap-3">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-wrap text-center w-full leading-tight">
					{privacyPolicy.name}
				</h1>
				{privacyPolicy.description.map((poli, idx) => {
					return (
						<Fragment key={idx + "privacy-policy"}>
							<h1 className="font-bold text-xl md:text-2xl mt-3">
								{poli.title}
							</h1>
							{poli.content.map((cont, idx) => {
								if (cont.length < 10) {
									return (
										<div
											key={idx + "conte-privacy-policy"}
											className="ps-6 flex flex-col items-start justify-normal gap-4"
										>
											{cont.map((subCont, idx) => {
												return (
													<Fragment
														key={
															idx +
															"sub-privacy-policy"
														}
													>
														<li className="list-item"></li>
														{subCont.subTitle && (
															<p className="opacity-70 text-lg font-bold leading-7">
																{
																	subCont.subTitle
																}
															</p>
														)}
														<p className="opacity-70 leading-7">
															{subCont.subContent}
														</p>
													</Fragment>
												);
											})}
										</div>
									);
								}
								return (
									<p
										key={idx + "sub-privacy-policy"}
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

export default PrivacyPolicy;
