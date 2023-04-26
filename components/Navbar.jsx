"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
	<motion.nav
		variants={navVariants}
		initial="hidden"
		whileInView="show"
		className={`${styles.xPaddings} py-5 relative`}
	>
		<div className="absolute w-[50%] inset-0 gradient-01" />

		<div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
			<img
				src="/search.svg"
				alt="search"
				className="w-[24px] h-[24px] object-contain"
			/>
			<h2 className="font-semibold text-[24px] leading-[30px] text-white">
				NAVANEETH
			</h2>
			<img
				src="/menu.svg"
				alt="menu"
				className="w-[24px] h-[24px] object-contain"
			/>
		</div>

		{/* <nav className="sticky top-0 z-10 bg-opacity-0">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-white font-semibold">Logo</span>
          <div className="flex space-x-4 text-white">
            <a href="#">Dashboard</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav> */}

		{/* <nav className="px-2 sm:px-4 rounded bg-transparent">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white" >NAVANEETH</h2>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-transparent" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-transparent">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-transparent">Work</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-transparent">Skills</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}
	</motion.nav>
);

export default Navbar;
