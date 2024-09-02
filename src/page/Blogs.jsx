import React from "react";
import { Link } from "react-router-dom";
import { blogsDetails } from "../constant";

const Blogs = () => {
	return (
		<div className="flex items-start justify-center gap-10 p-6 sm:p-9 md:p-12 flex-col">
			<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-nowrap">
				News
			</h1>
			<div className="flex gapt-8 sm:gap-10 md:gap-12 flex-wrap lg:flex-nowrap">
				{blogsDetails.map((blog, idx) => {
					return (
						<Link
							key={idx + "blog"}
							to={`/blog/${blog.link}`}
							className="product flex flex-col gap-2 p-2 sm:-4 md:p-6 rounded-md max-w-1/3"
						>
							<div className="pt-0 sm:pt-3 md:pt-5">
								<h3 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight line-clamp-1">
									{blog.name}
								</h3>
								<p className="text-xs uppercase opacity-70 mt-2 mb-3">
									{blog.date}
								</p>
								<p className="opacity-70 line-clamp-3">
									{blog.description[0].title}{" "}
									{blog.description[0].content[0]}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Blogs;
