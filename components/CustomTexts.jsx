"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
	<motion.p
		variants={textContainer}
		className={`font-normal text-[20px] text-white break-words ${textStyles}`}
	>
		{Array.from(title).map((letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{letter === " " ? "\u00A0" : letter}
			</motion.span>
		))}
	</motion.p>
);

export const TitleText = ({ title, textStyles }) => (
	<motion.h2
		variants={textVariant2}
		initial="hidden"
		whileInView="show"
		className={`mt-[8px] font-bold md:text-[64px] text-[30px] text-white ${textStyles}`}
	>
		{title}
	</motion.h2>
);

export const SponsorText = ({ title, textStyles }) => (
	<motion.h2
		variants={textVariant2}
		initial="hidden"
		whileInView="show"
		className={`mt-[8px] mb-[10px] font-bold md:text-[34px] text-[30px] text-white ${textStyles}`}
	>
		{title}
	</motion.h2>
);

export const SubtitleText = ({ title, textStyles }) => (
	<motion.h5
		variants={textVariant2}
		initial="hidden"
		whileInView="show"
		className={`mt-[8px] mb-[10px] font-bold md:text-[30px] text-[20px] text-white ${textStyles}`}
	>
		{title}
	</motion.h5>
);
