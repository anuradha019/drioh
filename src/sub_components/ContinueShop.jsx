import React from "react";
import { Link } from "react-router-dom";

const ContinueShop = ({ bg }) => {
	return (
		<Link
			to={"/catalog"}
			className={`${
				bg
					? "bg-color-yellow px-8 py-3 rounded-xl text-black"
					: "text-color-yellow underline"
			} text-sm sm:text-base`}
		>
			Continue shopping
		</Link>
	);
};

export default ContinueShop;
