"use client";

import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Theme = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className="gradient-02 z-0" />
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TitleText
				title={<>THEME - Regalia</>}
				textStyles="text-center cinzel-font"
			/>

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-[8px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-left sm:text-center text-white"
			>
				Multi-layered and intricate, the first half of this year’s theme,
				‘Datafication’, is a nod to the ever-increasing prevalence of data in
				the modern world. Data truly runs every process, every system, every
				machine, and is the foundation of every modern foray into the technology
				of tomorrow. The second half, ‘Digital Trust’, delves into the more
				consequential side of digital expansion. Security, privacy and the
				misuse of data have, in recent times, come to the spotlight as we move
				further into a tech-dependent world. Phase Shift 2022 will explore every
				facet of data, and will provide a platform to discuss these pressing
				matters, discern solutions and determine one simple question: is
				humanity ready for the years to come, or are we destined to play a game
				of catch-up with our own technology, forever?
			</motion.p>
			<motion.img
				variants={fadeIn("up", "tween", 0.3, 1)}
				src="/arrow-down.svg"
				alt="arrow down"
				className="w-[18px] h-[28px] object-contain mt-[28px]"
			/>
		</motion.div>
	</section>
);

export default Theme;
