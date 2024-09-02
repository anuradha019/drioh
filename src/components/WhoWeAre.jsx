import React, { useState } from "react";

const WhoWeAre = () => {
	const [isOpen, setOpen] = useState([false, false, false, false, false]);
	const handleBox = (idx) => {
		setOpen((prevState) => [
			...prevState.map((item, index) => (index === idx ? !item : item)),
		]);
	};
	return (
		<div className="flex items-center justify-center gap-5 p-6 sm:p-9 md:p-12 flex-col">
			<p className="opacity-70 text-base sm:text-xl uppercase">
				Who we are?
			</p>
			<div className="flex flex-col items-center w-full">
				<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
					A Car Wash Platform that Stands Apart
				</h1>
				<div className="w-full flex flex-wrap md:flex-nowrap gap-12 p-2 sm:p-4 md:p-6">
					<img
						className="w-full md:w-1/2 h-80 object-cover"
						src="/who-we-are.webp"
						alt="img"
					/>
					<div className="w-full md:w-1/2">
						<div className=" border-y border-white/10 ">
							<div
								className="font-bold text-xl md:text-2xl flex justify-between items-center p-3 hover:cursor-pointer hover:bg-zinc-800 hover:underline"
								onClick={() => handleBox(0)}
							>
								<span>
									<i className="mr-2 fa-brands fa-wpforms"></i>
									Cutting-Edge Technology
								</span>
								{isOpen[0] ? (
									<i className="text-xs fa-solid fa-angle-down"></i>
								) : (
									<i className="text-xs fa-solid fa-angle-up"></i>
								)}
							</div>
							{isOpen[0] && (
								<p className="opacity-70 leading-7 mb-3 pr-8 ps-1">
									Drioh is not just another car wash platform
									- we are a unique and innovative solution
									that redefines the way you experience car
									maintenance.
								</p>
							)}
						</div>
						<div className=" border-y border-white/10 ">
							<div
								className="font-bold text-xl md:text-2xl flex justify-between items-center p-3 hover:cursor-pointer hover:bg-zinc-800 hover:underline"
								onClick={() => handleBox(1)}
							>
								<span>
									<i className="mr-2 fa-brands fa-wpforms"></i>
									Eco-Friendly Approach
								</span>
								{isOpen[1] ? (
									<i className="text-xs fa-solid fa-angle-down"></i>
								) : (
									<i className="text-xs fa-solid fa-angle-up"></i>
								)}
							</div>
							{isOpen[1] && (
								<p className="opacity-70 leading-7 mb-3 pr-8 ps-1">
									We are committed to sustainability and
									minimizing our impact on the environment.
									With our eco-friendly practices and minimal
									water usage, we ensure that your car gets a
									thorough cleaning while reducing water
									waste.
								</p>
							)}
						</div>
						<div className=" border-y border-white/10 ">
							<div
								className="font-bold text-xl md:text-2xl flex justify-between items-center p-3 hover:cursor-pointer hover:bg-zinc-800 hover:underline"
								onClick={() => handleBox(2)}
							>
								<span>
									<i className="mr-2 fa-brands fa-wpforms"></i>
									Exceptional Service Quality
								</span>
								{isOpen[2] ? (
									<i className="text-xs fa-solid fa-angle-down"></i>
								) : (
									<i className="text-xs fa-solid fa-angle-up"></i>
								)}
							</div>
							{isOpen[2] && (
								<p className="opacity-70 leading-7 mb-3 pr-8 ps-1">
									Our team of skilled professionals goes
									outshining to ensure your car receives the
									best care possible from thorough cleaning to
									meticulous detailing.
								</p>
							)}
						</div>
						<div className=" border-y border-white/10 ">
							<div
								className="font-bold text-xl md:text-2xl flex justify-between items-center p-3 hover:cursor-pointer hover:bg-zinc-800 hover:underline"
								onClick={() => handleBox(3)}
							>
								<span>
									<i className="mr-2 fa-brands fa-wpforms"></i>
									Convenience at Your Fingertips
								</span>
								{isOpen[3] ? (
									<i className="text-xs fa-solid fa-angle-down"></i>
								) : (
									<i className="text-xs fa-solid fa-angle-up"></i>
								)}
							</div>
							{isOpen[3] && (
								<p className="opacity-70 leading-7 mb-3 pr-8 ps-1">
									With Drioh, you can book your car wash
									services effortlessly, right from the
									comfort of your home or office. Our
									streamlined approach puts convenience at the
									forefront.
								</p>
							)}
						</div>
						<div className=" border-y border-white/10 ">
							<div
								className="font-bold text-xl md:text-2xl flex justify-between items-center p-3 hover:cursor-pointer hover:bg-zinc-800 hover:underline"
								onClick={() => handleBox(4)}
							>
								<span>
									<i className="mr-2 fa-brands fa-wpforms"></i>
									Personalized Attention
								</span>
								{isOpen[4] ? (
									<i className="text-xs fa-solid fa-angle-down"></i>
								) : (
									<i className="text-xs fa-solid fa-angle-up"></i>
								)}
							</div>
							{isOpen[4] && (
								<p className="opacity-70 leading-7 mb-3 pr-8 ps-1">
									We provide personalized attention to each
									vehicle, tailoring our services to meet your
									specific needs.
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
