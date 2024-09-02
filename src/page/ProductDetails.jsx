import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../components/Products";
import { productDetails } from "../constant";
import ShareBtn from "../sub_components/ShareBtn";

const ProductDetails = () => {
	const { link } = useParams();
	const [itemAdded, setItemAdded] = useState(false);
	const [itemQuantity, setItemQuantity] = useState(1);
	let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
	const handleAddToLocalStorage = (product) => {
		let itemExists = false;
		cartItems.forEach((item) => {
			if (item.link === link) {
				item.quantity = product.quantity;
				itemExists = true;
			}
		});
		if (!itemExists) {
			cartItems.push({ ...product });
		}
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		handleItemAdded();
	};
	const handleRemoveToLocalStorage = (product) => {
		cartItems.forEach((item, idx) => {
			if (item.link === product.link) {
				cartItems.splice(idx, 1);
				localStorage.setItem("cartItems", JSON.stringify(cartItems));
			}
		});
		handleItemAdded();
	};
	const handleItemAdded = () => {
		setItemAdded(false);
		cartItems.forEach((item) => {
			if (item.link == link) {
				setItemAdded(true);
			}
		});
	};
	useEffect(() => {
		handleItemAdded();
	});
	const handleQuantityDec = (prod) => {
		if (prod.quantity > 1) {
			prod.quantity--;
		}
		setItemQuantity(prod.quantity);
	};
	const handleQuantityInc = (prod) => {
		prod.quantity++;
		setItemQuantity(prod.quantity);
	};
	return (
		<>
			{productDetails.map((product) => {
				if (product.link == link) {
					return (
						<div
							key={product.id}
							className="flex items-center justify-center gap-5 p-6 sm:p-9 md:p-12 flex-col"
						>
							<div className="w-full flex flex-wrap md:flex-nowrap gap-12 p-6 h-fit">
								<div className="flex items-start justify-center w-full md:w-1/2">
									<img
										className=" object-cover w-60 sm:w-72"
										src={product.image}
										alt={product.image}
									/>
								</div>
								<div className="w-full md:w-1/2 flex flex-col gap-3">
									<div>
										<p className="opacity-70 leading-7 text-xs uppercase">
											Drioh
										</p>
										<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl  leading-none">
											{product.name}
										</h1>
									</div>
									<p className="opacity-70 leading-7">
										Rs. {product.price}.00
									</p>
									<div>
										<p className="opacity-70 leading-7">
											Quantity
										</p>
										<div className="border border-white/50 bg-transparent py-2.5 px-4 w-fit flex gap-10 items-center justify-between">
											<span
												className="hover:cursor-pointer select-none"
												onClick={() =>
													handleQuantityDec(product)
												}
											>
												-
											</span>
											<span className="w-4 flex justify-center">
												<span>{itemQuantity}</span>
											</span>
											<span
												className="hover:cursor-pointer select-none"
												onClick={() =>
													handleQuantityInc(product)
												}
											>
												+
											</span>
										</div>
									</div>

									{itemAdded ? (
										<div
											className="cursor-pointer border-yellow-300 border px-8 py-3 rounded-xl text-color-yellow text-center"
											onClick={() =>
												handleRemoveToLocalStorage(
													product
												)
											}
										>
											Remove to cart
										</div>
									) : (
										<div
											className="cursor-pointer border-yellow-300 border px-8 py-3 rounded-xl text-color-yellow text-center"
											onClick={() =>
												handleAddToLocalStorage(product)
											}
										>
											Add to cart
										</div>
									)}
									<Link
										to={"/"}
										className="bg-color-yellow px-8 py-3 rounded-xl text-black text-center"
									>
										Buy it now
									</Link>
									<ol className="ps-8 flex flex-col gap-1.5">
										<li className="font-bold tracking-wide list-disc">
											Validity - 28 days.
										</li>
										{product.description.map(
											(detail, idx) => {
												return (
													<li
														key={idx + "detail"}
														className="list-disc opacity-70"
													>
														{detail}
													</li>
												);
											}
										)}
									</ol>
									<div className="my-4 ms-3">
										<ShareBtn />
									</div>
								</div>
							</div>
						</div>
					);
				}
			})}

			<div className="flex items-start justify-center gap-5 p-6 sm:p-9 md:p-12 flex-col w-full">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-wrap uppercase">
					YOU MAY ALSO LIKE
				</h1>
				<Products />
			</div>
		</>
	);
};

export default ProductDetails;
