import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubHeader = ({ setSubHead }) => {
	const path = useLocation();
	return (
		<div className="w-full flex flex-col gap-0.5 h-lvh text-lg bg-color">
			<Link
				onClick={() => setSubHead(false)}
				to="/"
				className={`${
					path.pathname == "/" && "bg-zinc-800"
				} hover:bg-zinc-900 px-8 p-3 `}
			>
				Home
			</Link>
			<Link
				onClick={() => setSubHead(false)}
				to="/catalog"
				className={`${
					path.pathname == "/catalog" && "bg-zinc-800"
				} hover:bg-zinc-900 px-8 p-3 `}
			>
				Catalog
			</Link>
			<Link
				onClick={() => setSubHead(false)}
				to="/contact"
				className={`${
					path.pathname == "/contact" && "bg-zinc-800"
				} hover:bg-zinc-900 px-8 p-3 `}
			>
				Contact
			</Link>
			<Link
				onClick={() => setSubHead(false)}
				to="/about-us"
				className={`${
					path.pathname == "/about-us" && "bg-zinc-800"
				} hover:bg-zinc-900 px-8 p-3 `}
			>
				About Us
			</Link>
			<Link
				onClick={() => setSubHead(false)}
				to="/blogs"
				className={`${
					path.pathname == "/blogs" && "bg-zinc-800"
				} hover:bg-zinc-900 px-8 p-3 `}
			>
				Blogs
			</Link>
		</div>
	);
};

export default SubHeader;
