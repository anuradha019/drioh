import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constant";

const Footer = () => {
	return (
		<>
			<div className="flex items-center justify-center gap-6 p-4 sm:-6 md:p-8 flex-col pb-12">
				<div className="flex flex-col items-center ">
					<img
						src="/drioh.webp"
						alt="drioh"
						className="h-16 sm:h-20 md:h-24"
					/>
				</div>
				<p className="font-bold text-xl sm:text-2xl md:text-3xl">
					Drive with Excitement
				</p>
				<div className="flex gap-6">
					<Link
						className="transition-all hover:scale-105"
						to={socialLinks.instagram}
					>
						<i className="text-lg fa-brands fa-instagram"></i>
					</Link>
					<Link
						className="transition-all hover:scale-105"
						to={socialLinks.youtube}
					>
						<i className="text-lg fa-brands fa-youtube"></i>
					</Link>
				</div>
			</div>
			<div className="flex-wrap text-white/80 border-t-[.5px] border-zinc-700 flex justify-start text-xs gap-2 p-8 md:p-12 bg-color underline-offset-2">
				<span>© 2024,</span>
				<Link className="hover:underline" to={"/"}>
					Drioh
				</Link>
				<Link className="hover:underline" to={"/privacy-policy"}>
					Privacy policy
				</Link>
				<Link className="hover:underline" to={"/terms-of-service"}>
					Terms of service
				</Link>
				<Link className="hover:underline" to={"/contact-information"}>
					Contact information
				</Link>
			</div>
		</>
	);
};

export default Footer;
