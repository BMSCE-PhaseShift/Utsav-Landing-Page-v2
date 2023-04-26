"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Hero = () => (
	<section className="w-full h-screen">
		<video
			className="w-full h-full object-cover"
			src="./videoBg.mp4"
			autoPlay
			loop
			muted
			playsInline
		/>
	</section>
);

export default Hero;
