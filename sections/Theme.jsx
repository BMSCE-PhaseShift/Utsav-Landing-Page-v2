"use client";

import { motion } from "framer-motion";
import { TitleText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Theme = () => (
	<section className={`${styles.paddings} relative z-0`} id="theme">
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
				textStyles="text-center cinzel-font text-hp-yellow"
			/>

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-[8px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-left sm:text-center text-white"
			>
				Regalia emulates royalty - it is not just an emotion, but a way of life
				that makes one feel a sense of belonging while also being in an exalted
				state of being. Regality is experienced by those who give their all,
				stand firm for what they believe in, and have faith in their purpose,
				like flowers that bloom through concrete. It does not require material
				possessions or money, but can be found in one's passion, vigour, and
				drive to achieve their dreams. When someone is driven by a strong sense
				of purpose and a burning desire to succeed, they radiate a regal aura
				that commands respect, admiration and reverence. In essence, true
				royalty is not about what one possesses, but rather about who they are
				and what they stand for. Utsav 2023 aims to uplift and nurture the light
				within us by celebrating our unique talents, strengths, and
				individuality. Fondly and aptly known as the Festival of Faith, Utsav is
				spotlighting the indomitable human spirit in its 2023 edition.
			</motion.p>
			{/* <motion.img
				variants={fadeIn("up", "tween", 0.3, 1)}
				src="/arrow-down.svg"
				alt="arrow down"
				className="w-[18px] h-[28px] object-contain mt-[28px]"
			/> */}
		</motion.div>
	</section>
);

export default Theme;
