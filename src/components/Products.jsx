import React from "react";
import { Link, useParams } from "react-router-dom";
import { productDetails } from "../constant";

const Products = () => {
	const { link } = useParams();
	return (
		<div className="flex lg:gap-10 flex-wrap justify-between lg:flex-nowrap w-full">
			{productDetails.map((product) => {
				if (product.link != link) {
					return (
						<Link
							className="product flex flex-col gap-2 p-2 sm:p-4 md:p-6 rounded-md w-1/2"
							key={product.id}
							to={`/catalog/${product.link}`}
						>
							<img
								className="w-60 sm:w-72"
								src={product.image}
								alt="product"
							/>
							<div className="pt-5 text-base md:text-lg">
								<h3 className="font-bold text-nowrap">
									{product.name}
								</h3>
								<p className="text-nowrap">
									Rs. {product.price}.00
								</p>
							</div>
						</Link>
					);
				}
			})}
		</div>
	);
};

export default Products;
