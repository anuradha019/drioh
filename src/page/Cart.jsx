import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContinueShop from "../sub_components/ContinueShop";

const Cart = () => {
	const [itemQuantity, setItemQuantity] = useState("product no");
	let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
	const calculateTotalPrice = () => {
		let total = 0;
		cartItems.forEach((item) => {
			total += item.price * item.quantity;
		});
		return total;
	};
	const handleQuantityDec = (prod) => {
		if (prod.quantity > 1) {
			prod.quantity--;
		}
		setItemQuantity(prod.quantity);
		console.log(prod.quantity);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};
	const handleQuantityInc = (prod) => {
		prod.quantity++;
		setItemQuantity(prod.quantity);
		console.log(prod.quantity);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};
	const handleDeleteToLocalStorage = (product) => {
		cartItems.forEach((item, idx) => {
			if (item.link === product.link) {
				cartItems.splice(idx, 1);
				localStorage.setItem("cartItems", JSON.stringify(cartItems));
			}
		});
		setItemQuantity(product.name);
	};
	return cartItems.length == 0 ? (
		<div className="flex items-center justify-center gap-10 p-6 md:p-8 flex-col h-[50vh]">
			<div className="flex flex-col items-center ">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
					Your cart is empty
				</h1>
			</div>
			<ContinueShop bg={true} />
		</div>
	) : (
		<div className="flex items-start justify-center gap-10 p-6 sm:p-9 md:p-12 flex-col">
			<div className="flex justify-between items-center w-full">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-nowrap">
					Your cart
				</h1>
				<ContinueShop bg={false} />
			</div>
			<div className="flex justify-between w-full items-center text-xs opacity-50 py-4 border-b border-gray-400 uppercase">
				<p className="w-1/3 md:w-2/4">Product</p>
				<p className="w-1/3 md:w-1/4">Quantity</p>
				<p className="w-1/3 md:w-1/4 text-end">Total</p>
			</div>
			{cartItems.map((item) => {
				return (
					<div
						key={item.link}
						className="flex justify-between w-full items-center"
					>
						<div className="w-1/3 md:w-2/4 flex md:flex-row flex-col justify-start gap-2 md:gap-4 ">
							<img
								src={item.image}
								alt={item.name}
								className="w-20 md:w-32  md:h-32"
							/>
							<Link
								to={`/catalog/${item.link}`}
								className="pt-5 hover:underline"
							>
								<h3 className="font-bold text-base sm:text-lg md:text-xl text-nowrap">
									{item.name}
								</h3>
								<p className="opacity-70 text-sm">
									Rs. {item.price}.00
								</p>
							</Link>
						</div>
						<div className="w-1/3 md:w-1/4 flex justify-start  flex-col sm:flex-row items-center gap-4">
							<div className="border border-white/50 bg-transparent py-1.5 md:py-2.5 px-2.5 md:px-4 w-fit flex gap-2 md:gap-10 items-center justify-between">
								<span
									className="hover:cursor-pointer select-none"
									onClick={() => handleQuantityDec(item)}
								>
									-
								</span>
								<span className="w-4 flex justify-center">
									<span>{item.quantity}</span>
								</span>
								<span
									className="hover:cursor-pointer select-none"
									onClick={() => handleQuantityInc(item)}
								>
									+
								</span>
							</div>
							<span
								className=" cursor-pointer"
								onClick={() => handleDeleteToLocalStorage(item)}
							>
								<i className="fa-solid fa-trash-can"></i>
							</span>
						</div>
						<p className="w-1/3 md:w-1/4 text-sm sm:text-base text-end">
							Rs. {item.price}.00
						</p>
					</div>
				);
			})}
			<div className="flex justify-center gap-6 flex-col w-full items-end py-4 border-t border-gray-400/50">
				<div className="flex gap-4 items-end">
					<h1 className=" text-xl md:text-2xl font-bold">
						Estimated total
					</h1>
					<span className="text-lg opacity-70">
						Rs. {calculateTotalPrice()}.00
					</span>
				</div>
				<p className="text-sm opacity-70 text-end">
					Taxes, discounts and shipping calculated at checkout
				</p>
				<Link
					to={"/"}
					className="bg-color-yellow w-1/4 min-w-48 py-3 text-sm rounded-xl text-black text-center"
				>
					Check out
				</Link>
			</div>
		</div>
	);
};

export default Cart;
