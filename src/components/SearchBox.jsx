import React, { useState } from "react";
import { productDetails } from "../constant";
import { Link } from "react-router-dom";

const SearchBox = ({ setSearchBox }) => {
	const [text, setText] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const handleSearch = () => {
		setText("");
	};
	const handleSearchChange = (e) => {
		setText(e.target.value);
		if (!e.target.value.trim()) {
			setFilteredProducts([]);
		} else {
			setFilteredProducts(
				productDetails.filter((item) => {
					return item.name
						.toLowerCase()
						.includes(e.target.value.toLowerCase());
				})
			);
			console.log(filteredProducts);
		}
	};
	return (
		<>
			<div
				className={`text-white flex flex-col justify-center items-center py-12 bg-color gap-1 transition-all sticky z-40`}
			>
				<div className="flex justify-center items-center gap-4 w-full">
					<input
						value={text}
						type="text"
						placeholder="Search"
						className=" py-2 border border-white bg-transparent px-3 w-1/2"
						onChange={(e) => handleSearchChange(e)}
					/>
					<div
						className="cursor-pointer w-10"
						onClick={() => setSearchBox(false)}
					>
						<i className="fa-solid fa-xmark"></i>
					</div>
				</div>
				{filteredProducts?.length > 0 &&
					filteredProducts.map((prod, idx) => {
						return (
							<div
								key={prod + idx + "prod"}
								className="bottom-0 flex  w-full justify-center gap-4 items-center  mb-1 "
							>
								<Link
									to={`/catalog/${prod.link}`}
									onClick={() => setSearchBox(false)}
									className="hover:bg-gray-700/50 hover:underline underline-offset-2 py-2 border flex justify-between items-center border-white/10 bg-transparent px-3 w-1/2"
								>
									<span className="text-sm opacity-70">
										{prod.name}
									</span>
									<div className=""></div>
								</Link>
								<div className="cursor-pointer w-10"></div>
							</div>
						);
					})}
				{text && (
					<div className="absolute bottom-0 flex  w-full justify-center gap-4 items-center  mb-1 ">
						<div className="py-2 border flex justify-between items-center border-white/10 bg-transparent px-3 w-1/2">
							<span>Search for "{text}"</span>
							<i
								className="fa-solid fa-arrow-right text-color-yellow cursor-pointer"
								onClick={handleSearch}
							></i>
						</div>
						<div className="cursor-pointer w-10"></div>
					</div>
				)}
			</div>
			<div className="h-dvh bg-white/30"></div>
		</>
	);
};

export default SearchBox;
