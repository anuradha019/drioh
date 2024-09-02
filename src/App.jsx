import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import SearchBox from "./components/SearchBox";

const AboutUs = lazy(() => import("./page/AboutUs"));
const Contact = lazy(() => import("./page/Contact"));
const Blogs = lazy(() => import("./page/Blogs"));
const Catalog = lazy(() => import("./page/Catalog"));
const Cart = lazy(() => import("./page/Cart"));
const ProductDetails = lazy(() => import("./page/ProductDetails"));
const BlogDetails = lazy(() => import("./page/BlogDetails"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const PrivacyPolicy = lazy(() => import("./page/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./page/TermsOfService"));
const ContactInformation = lazy(() => import("./page/ContactInformation"));

function App() {
	const [searchBox, setSearchBox] = useState(false);
	return (
		<div className="bg-color text-white">
			<div className="p-2 w-full bg-color-yellow text-black text-center font-bold text-lg">
				WELCOME TO OUR STORE
			</div>
			<div className="relative">
				<BrowserRouter>
					<Header setSearchBox={setSearchBox} />
					<div className="fixed w-full top-0 z-50">
						{searchBox && <SearchBox setSearchBox={setSearchBox} />}
					</div>
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about-us" element={<AboutUs />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/blogs" element={<Blogs />} />
							<Route path="/catalog" element={<Catalog />} />
							<Route
								path="/catalog/:link"
								element={<ProductDetails />}
							/>
							<Route
								path="/blog/:link"
								element={<BlogDetails />}
							/>
							<Route path="/cart" element={<Cart />} />
							<Route
								path="/privacy-policy"
								element={<PrivacyPolicy />}
							/>
							<Route
								path="/terms-of-service"
								element={<TermsOfService />}
							/>
							<Route
								path="/contact-information"
								element={<ContactInformation />}
							/>
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</Suspense>
					<Footer />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
