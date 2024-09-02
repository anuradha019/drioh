import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SubHeader from "./SubHeader";

const Header = ({ setSearchBox }) => {
	const path = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path]);
	const [head, setHead] = useState(true);
	const [subHead, setSubHead] = useState(false);
	let lastScrollTop = 0;
	useEffect(() => {
		const handle = () => {
			let scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				setHead(false);
			} else {
				setHead(true);
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
		};
		window.addEventListener("scroll", handle);
		return () => window.removeEventListener("scroll", handle);
	}, []);
	useEffect(() => {
		if (subHead) {
			window.scrollTo(0, 0);
			window.innerHeight = "100vh";
			document.body.style.overflow = "hidden";
		} else {
			window.innerHeight = "auto";
			document.body.style.overflow = "auto";
		}
	});
	return (
		<>
			<div
				className={`${
					head ? "top-0 " : "-top-full"
				} text-white flex justify-between py-5 md:py-7 px-6 sm:px-9 md:px-12 bg-color gap-4 underline-offset-4 transition-all duration-500 sticky z-40`}
			>
				<div
					onClick={() => setSubHead(!subHead)}
					className="justify-start items-center cursor-pointer text-xl font-normal w-12 md:hidden flex"
				>
					{subHead ? (
						<span className="">
							<i className="fa-solid fa-xmark"></i>
						</span>
					) : (
						<span className="">
							<i className="fa-solid fa-bars"></i>
						</span>
					)}
				</div>
				<div className="flex gap-6 justify-between items-center">
					<Link to="/" className="font-bold text-3xl md:pr-5">
						<img
							src="/drioh-head.avif"
							alt="drioh"
							className="h-20"
						/>
					</Link>
					<Link
						to="/"
						className={`${
							path.pathname == "/"
								? "underline opacity-100"
								: "opacity-60"
						} hover:underline hover:opacity-85 text-sm md:block hidden `}
					>
						Home
					</Link>
					<Link
						to="/catalog"
						className={`${
							path.pathname == "/catalog"
								? "underline opacity-100"
								: "opacity-60"
						} hover:underline hover:opacity-85 text-sm md:block hidden `}
					>
						Catalog
					</Link>
					<Link
						to="/contact"
						className={`${
							path.pathname == "/contact"
								? "underline opacity-100"
								: "opacity-60"
						} hover:underline hover:opacity-85 text-sm md:block hidden `}
					>
						Contact
					</Link>
					<Link
						to="/about-us"
						className={`${
							path.pathname == "/about-us"
								? "underline opacity-100"
								: "opacity-60"
						} hover:underline hover:opacity-85 text-sm md:block hidden `}
					>
						About Us
					</Link>
					<Link
						to="/blogs"
						className={`${
							path.pathname == "/blogs"
								? "underline opacity-100"
								: "opacity-60"
						} hover:underline hover:opacity-85 text-sm md:block hidden `}
					>
						Blogs
					</Link>
				</div>
				<div className="flex justify-between items-center gap-5">
					<i
						className="text-xl fa-solid fa-magnifying-glass cursor-pointer"
						onClick={() => setSearchBox(true)}
					></i>
					<Link to="/cart">
						<i className="text-xl fa-solid fa-box"></i>
					</Link>
				</div>
			</div>
			<div className="w-full top-0 z-50 relative">
				<div
					className={`top-0 absolute transition-all duration-300 w-full sm:w-3/4 md:w-1/2 ${
						!subHead ? "-left-full" : "left-0"
					}`}
				>
					<SubHeader setSubHead={setSubHead} />
				</div>
			</div>
		</>
	);
};

export default Header;
