import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Products from "../components/Products";
import ContactBox from "../components/ContactBox";
import WhyChooseUs from "../components/WhyChooseUs";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
	return (
		<>
			{/* hero section */}
			<div className="flex items-center justify-center gap-10 p-6 sm:p-9 md:p-12 flex-col">
				<div className="flex flex-col items-center ">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
						Waterless Car Cleaning at your
					</h1>
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
						Door Step!
					</h1>
				</div>
				<p className="opacity-70 text-center">
					Wake up to a clean shining car, giving you one less thing to
					worry about
				</p>
				<Link
					to={"/contact"}
					className="bg-color-yellow px-8 py-3 rounded-xl text-sm sm:text-base text-black"
				>
					Count me in 🚗
				</Link>
			</div>
			{/* services */}
			<div className="flex items-start justify-center gap-10 p-6 sm:p-9 md:p-12 flex-col">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-nowrap">
					Our Services
				</h1>
				<Services />
			</div>
			<div className="flex items-start justify-center gap-5 p-6 sm:p-9 md:p-12 flex-col w-full">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-wrap">
					Monthly Packages For All Types of Car
				</h1>
				<h1 className="text-lg text-nowrap opacity-70">
					Exclusively in Bangalore
				</h1>
				<Products />
			</div>
			{/* why choose us */}
			<WhyChooseUs />
			{/* who we are */}
			<WhoWeAre />
			{/* contact */}
			<div className="flex items-center justify-center gap-10 p-6 sm:p-9 md:p-12 flex-col">
				<div className="md:w-1/2 flex flex-col justify-center items-start">
					<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
						We are here to assist you!
					</h1>
					<ContactBox />
				</div>
			</div>
			{/* home footer */}
			<div className="flex items-center justify-center gap-6 p-8 flex-col">
				<p className="opacity-70 text-base md:text-lg">We believe</p>
				<div className="flex flex-col items-center ">
					<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
						"It's more than a car
					</h1>
					<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
						service, it's an Emotion."
					</h1>
				</div>
			</div>
		</>
	);
};

export default Home;
