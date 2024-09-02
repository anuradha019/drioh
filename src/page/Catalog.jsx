import React from "react";
import Products from "../components/Products";

const Catalog = () => {
	return (
		<div className="flex items-start justify-center gap-5 p-6 sm:p-9 md:p-12 flex-col pb-12">
			<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-12 text-nowrap">
				Products
			</h1>
			<Products />
		</div>
	);
};

export default Catalog;
