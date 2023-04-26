"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { planetVariants, fadeIn, staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Section1 = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col mb-60`}
		>
			<TitleText
				title={<>UTSAV 2023</>}
				textStyles="mt-8 text-center cinzel-font"
			/>
			<TypingText title="South India's Biggest" textStyles="text-center" />
			<TypingText title="Cultural College Festival" textStyles="text-center" />
			<div className="mt-[50px] flex flex-col gap-[30px]">
				<motion.p
					variants={fadeIn("up", "tween", 0.2, 1)}
					className="mt-[8px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center text-white"
				>
					Placeholder for Text Scramble
				</motion.p>
			</div>
			<div className="mt-[50px] flex flex-col gap-[30px]">
				<motion.p
					variants={fadeIn("up", "tween", 0.2, 1)}
					className="mt-[8px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center text-white"
				>
					Placeholder for Countdown
				</motion.p>
			</div>
		</motion.div>
	</section>
);

export default Section1;
