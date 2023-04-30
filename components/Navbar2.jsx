import { useState } from "react";

function Navbar2() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	return (
		<nav className="bg-gray-900">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* Hamburger button */}
						<button
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							<svg
								className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						{/* Logo */}
						<div className="flex-shrink-0 flex items-center">
							<img
								className="block lg:hidden h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
							<img
								className="hidden lg:block h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
								alt="Workflow"
							/>
						</div>
						{/* Navigation links */}
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								<a
									href="#"
									className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 hover:text-white hover:bg-gray-700"
								>
									Home
								</a>
								<a
									href="#"
									className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white hover:bg-gray-700"
								>
									Contact us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile menu, toggle classes based on menu state */}
			<div
				className={`${
					isMobileNavOpen ? "fixed" : "hidden"
				} sm:block bg-gray-900 w-full h-screen`}
			>
				<div className="flex justify-end items-center p-4">
					<button
						className="text-white focus:outline-none"
						onClick={() => setIsMobileNavOpen(false)}
					>
						<svg
							className="w-6 h-6 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<title>Close</title>
							<path d="M18.364,3.636c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0L10,7.172L5.464,2.636   c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L7.172,10L2.636,14.536c-0.781,0.781-0.781,2.047,0,2.828   C2.926,17.902,3.463,18,4,18s1.074-0.098,1.464-0.464L10,12.828l4.536,4.536C14.926,17.902,15.463,18,16,18s1.074-0.098,1.464-0.464   c0.781-0.781,0.781-2.047,0-2.828L12.828,10L17.364,5.464C19.145,3.683,19.145,4.93,18.364,3.636z" />
						</svg>
					</button>
				</div>
				<nav className="text-center text-white mt-4">
					<a className="block py-2 px-4 hover:text-gray-500" href="/">
						Home
					</a>
					<a className="block py-2 px-4 hover:text-gray-500" href="/contact">
						Contact Us
					</a>
				</nav>
			</div>
		</nav>
	);
}

export default Navbar2;
