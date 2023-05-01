"use client";

import { motion } from "framer-motion";

import { TitleText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Events = () => (
	<section className={`${styles.paddings} relative z-0`} id="events">
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col  sm:mb-20 `}
		>
			<TitleText
				title={<>Events and Workshops</>}
				textStyles="text-center cinzel-font text-hp-yellow"
			/>
			<div className="mt-[20px] flex flex-col gap-[30px]">
				<motion.div
					variants={fadeIn("up", "tween", 0.2, 1)}
					className="mt-[20px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center text-white"
				>
					{/* add text */}
					<p>We have a plethora of events and workshops lined up for you.</p>
					<button
						onClick={() => window.open("https://register.bmsutsav.in")}
						className="mt-[20px] bg-transparent hover:bg-yellow-300 text-yellow-200 font-semibold hover:text-black py-1 px-3 border border-yellow-500 hover:border-transparent rounded"
					>
						Explore Events and Workshops
					</button>
				</motion.div>
			</div>
		</motion.div>
	</section>
);

export default Events;
