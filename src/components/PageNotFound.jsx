import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="flex items-center justify-center gap-10 p-8 flex-col">
			<div className="flex flex-col items-center ">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
					Page Not Found
				</h1>
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-2 opacity-20">
					404
				</h1>
			</div>
			<Link
				to={"/"}
				className="bg-color-yellow px-8 py-3 rounded-xl text-black"
			>
				Home
			</Link>
		</div>
	);
};

export default PageNotFound;
