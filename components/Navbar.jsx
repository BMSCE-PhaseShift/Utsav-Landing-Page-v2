"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Home", href: "#", current: true },
	{ name: "Events", href: "#events", current: false },
	{ name: "Theme", href: "#theme", current: false },
	{ name: "About", href: "#about", current: false },
	{ name: "Register", href: "https://register.bmsutsav.in/", current: false },
	{ name:"Play-Game", href: "https://game.bmsutsav.in/", current: false}
	{ name: "Contact Us", href: "#contact", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	return (
		<Disclosure
			as="nav"
			className="fixed top-0 z-20 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-40 w-full"
		>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-yellow-300 hover:font-large focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-10 w-auto lg:hidden"
										src="/logo.png"
										alt="Utsav Logo"
									/>
									<img
										className="hidden h-10 w-auto lg:block"
										src="/logo.png"
										alt="Utsav Logo"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												target={item.name === "Register" || "Play-Game" ? "_blank" : "_self"}
												className={classNames(
													item.current
														? "text-gray-300 hover:text-yellow-300 hover:font-large"
														: item.name === "Register" || "Play-Game"
														? "text-red-500 hover:text-red-700" // change color to blue
														: "text-gray-300 hover:text-yellow-300",
													"rounded-md px-3 py-2 text-md font-medium hover:text-lg"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									target={item.name === "Register" || "Play-Game" ? "_blank" : "_self"}
									className={classNames(
										item.current
											? "text-yellow-300"
											: item.name === "Register" || "Play-Game"
											? "text-red-500 hover:text-red-700" // change color to blue
											: "text-gray-300 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium hover:font-large"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
