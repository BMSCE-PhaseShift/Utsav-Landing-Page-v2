"use client";

import { motion } from "framer-motion";

import { TitleText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const AboutUs = () => (
	<section className={`${styles.paddings} relative z-10`} id="about">
		<div className="gradient-02 z-0" />
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TitleText
				title={<>ABOUT US - BMSCE</>}
				textStyles="text-center cinzel-font text-hp-yellow"
			/>
			<motion.img
				variants={fadeIn("up", "tween", 0.3, 1)}
				src="/abtimg.webp"
				alt="arrow down"
				className="w-[150px] h-[150px] object-contain mt-[28px] mb-[14px]"
			/>

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-[8px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-justify sm:text-justify text-white"
			>
				Established in 1946, B. M. S. College of Engineering (BMSCE) is a
				pioneer in the field of Engineering Education. The visionary, Late Sri
				B. M. Sreenivasaiah conceived the vision of BMSCE to be a pillar of
				higher education in the heart of Bengaluru- Basavanagudi. His passion
				was shared and reflected in the ideals of his son, Late Sri B. S.
				Narayan, who continued to ensure quality education to students from all
				around the world. B. M. S. College of Engineering has evolved today to
				house 17 undergraduate courses and 15 postgraduate courses in various
				domains of engineering and management, and employs highly trained
				faculty and staff to ensure exceptional education with one foot firmly
				in the future.
			</motion.p>
		</motion.div>
	</section>
);

export default AboutUs;
