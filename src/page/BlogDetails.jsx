import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { blogsDetails } from "../constant";
import ShareBtn from "../sub_components/ShareBtn";

const BlogDetails = () => {
	const { link } = useParams();
	return (
		<>
			<div className="flex items-center justify-center p-6 sm:p-9 md:p-12 flex-col">
				<div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center items-start gap-3">
					{blogsDetails.map((blog) => {
						if (blog.link == link) {
							return (
								<Fragment key={blog.link}>
									<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-wrap leading-tight">
										{blog.name}
									</h1>
									<p className="text-xs uppercase opacity-70 mt-1 mb-3">
										{blog.date}
									</p>
									<ShareBtn />
									{blog.description.map((des, idx) => {
										return (
											<Fragment
												key={blog.name + idx + "des"}
											>
												<h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-3">
													{des.title}
												</h1>
												{des.content.map((content) => {
													return (
														<p
															key={
																blog.name +
																idx +
																"content"
															}
															className="opacity-70 leading-7 my-0.5"
														>
															{content}
														</p>
													);
												})}
											</Fragment>
										);
									})}
									<Link
										to="/blogs"
										className="text-lg text-color-yellow my-4 text-center w-full blog-back"
									>
										<i className="fa-solid fa-arrow-left mr-2 text-sm"></i>
										<span>Back to blog</span>
									</Link>
								</Fragment>
							);
						}
					})}
				</div>
			</div>
		</>
	);
};

export default BlogDetails;
