"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { planetVariants, fadeIn, staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText } from "../components";

const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Section1 = () => {
	const [text, setText] = useState("LETS GOOOO");
	const [intervalId, setIntervalId] = useState(null);
	const [stringIndex, setStringIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);

	const strings = [
		"UTSAV 2023",
		"26, 27, 28 May 2023",
		"REGALIA",
		"ROYALTY",
		"FESTIVAL OF FAITH",
	];
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	const handleMouseOver = () => {
		let iteration = 0;
		const nextStringIndex = (stringIndex + 1) % strings.length;
		console.log(stringIndex);
		const newText = strings[nextStringIndex];

		clearInterval(intervalId);

		const newIntervalId = setInterval(() => {
			setText((prevText) =>
				newText
					.split("")
					.map((letter, index) => {
						if (index < iteration) {
							return letter;
						}
						return letters[Math.floor(Math.random() * 26)];
					})
					.join("")
			);

			// if (iteration >= newText.length) {
			// 	clearInterval(newIntervalId);
			// }

			iteration += 1 / 3;
		}, 30);

		setIntervalId(newIntervalId);
		setStringIndex(nextStringIndex);
		setCurrentIndex(nextStringIndex);
	};

	useEffect(() => {
		return () => clearInterval(intervalId);
	}, [intervalId]);

	useEffect(() => {
		const int2 = setInterval(() => {
			// onMouseOverHandler();
			handleMouseOver();
			// setStringIndex(stringIndex + 1);
			// console.log(stringIndex)
		}, 3000);
		return () => clearInterval(int2);
	}, [currentIndex]);
	return (
		<>
			<section className={`${styles.paddings} relative z-10`}>
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.25 }}
					className={`${styles.innerWidth} mx-auto flex flex-col sm:mb-20 `}
				>
					<TitleText
						title={<>UTSAV 2023</>}
						textStyles="mt-8 text-center cinzel-font text-hp-yellow"
					/>
					<TypingText title="South India's Biggest" textStyles="text-center" />
					<TypingText
						title="Cultural College Festival"
						textStyles="text-center"
					/>
					<div className="mt-[50px] flex flex-col gap-[30px]">
						<h1
							// variants={fadeIn("up", "tween", 0.2, 1)}
							// data-value="HYPERPLEXED"
							// onMouseOver={handleMouseOver}
							className="mt-[8px] lg:mx-[32px] font-bold sm:text-[32px] text-[24px] text-center text-white space-mono-font"
						>
							{text}
						</h1>
					</div>
					<div className="mt-[50px] flex flex-col gap-[30px]">
						<motion.div
							variants={fadeIn("up", "tween", 0.2, 1)}
							className="mt-[8px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center text-white"
						>
							<Timer></Timer>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Section1;

const Timer = () => {
	function getTimeRemaining() {
		const t = new Date();
		const r = new Date(2023, 4, 26);
		const total = Date.parse(r) - Date.parse(t);
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		return {
			days: ("0" + days).slice(-2),
			hours: ("0" + hours).slice(-2),
			minutes: ("0" + minutes).slice(-2),
			seconds: ("0" + seconds).slice(-2),
		};
	}
	const [date, setDate] = useState(null);

	function updateClock() {
		const t = getTimeRemaining();
		setDate(t);
	}
	useEffect(() => {
		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
		return () => {
			clearInterval(timeinterval);
		};
	}, []);

	if (date)
		return (
			<div className="flex justify-center items-center">
				<div className="flex flex-row">
					<div className="mx-[20px] text-yellow-300">
						<p
							className="cinzel-font font-semibold"
							style={{ fontSize: "2em" }}
						>
							{date.days}
						</p>
						<p style={{ fontSize: "1em", color: "#b1b5ba" }}>Days</p>
					</div>
					<div className="mx-[20px] text-yellow-300">
						<p
							className="cinzel-font font-semibold"
							style={{ fontSize: "2em" }}
						>
							{date.hours}
						</p>
						<p style={{ fontSize: "1em", color: "#b1b5ba" }}>Hours</p>
					</div>
					<div className="mx-[20px] text-yellow-300">
						<p
							className="cinzel-font font-semibold"
							style={{ fontSize: "2em" }}
						>
							{date.minutes}
						</p>
						<p style={{ fontSize: "1em", color: "#b1b5ba" }}>mins</p>
					</div>
					<div className="mx-[20px] text-yellow-300">
						<p
							className="cinzel-font font-semibold"
							style={{ fontSize: "2em" }}
						>
							{date.seconds}
						</p>
						<p style={{ fontSize: "1em", color: "#b1b5ba" }}>Secs</p>
					</div>
				</div>
			</div>
		);
	else return <></>;
};
