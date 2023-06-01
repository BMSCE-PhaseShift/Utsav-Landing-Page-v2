"use client";

import { motion } from "framer-motion";

import { InsightCard, SubtitleText, TitleText } from "../components";
import { adv, fac, patrons, stu } from "../constants";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
const Patrons = () => {
	return (
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
					title={<>Our Patrons</>}
					textStyles="text-center cinzel-font text-hp-yellow"
				/>
				{/*  create a seprate section for each type of import from constants */}
				<motion.div
					// give mt and mb to this div of 25px
					className="mb-[25px]"
				>
					<SubtitleText
						title={<>Patrons</>}
						textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
					/>
					<motion.div
						variants={fadeIn("up", "tween", 0.3, 1)}
						className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-4 mx-auto"
					>
						{patrons.map((patron, index) => (
							<Card 
								key={index}
								name={patron.name}
								role={patron.role}
								img={patron.img}
							/>
						))}

					</motion.div>
				</motion.div>

				<motion.div className="mb-[25px] mt-[65px]">
					<SubtitleText
						title={<>Advisory Committee</>}
						textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
					/>
					<motion.div
						variants={fadeIn("up", "tween", 0.3, 1)}
						className="flex flex-wrap justify-around items-center flex-col md:flex-row gap-4 mx-auto"
					>
						{adv.map((patron, index) => (
							<Card 
								key={index}
								name={patron.name}
								role={patron.role}
								img={patron.img}
							/>
						))}
					</motion.div>
				</motion.div>

				<motion.div className="mb-[25px] mt-[65px]">
					<SubtitleText
						title={<>Faculty Core Committee</>}
						textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
					/>
					<motion.div
						variants={fadeIn("up", "tween", 0.3, 1)}
						className="flex flex-wrap justify-around items-center flex-col md:flex-row gap-4 mx-auto"
					>
						{fac.map((patron, index) => (
							<Card 
								key={index}
								name={patron.name}
								role={patron.role}
								img={patron.img}
							/>
						))}
					</motion.div>
				</motion.div>

				<motion.div className="mb-[25px] mt-[65px]">
					<SubtitleText
						title={<>Student Core Committee</>}
						textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
					/>
					<motion.div
						variants={fadeIn("up", "tween", 0.3, 1)}
						className="flex flex-wrap justify-around items-center flex-col md:flex-row gap-4 mx-auto"
					>
						{stu.map((patron, index) => (
							<Card 
								key={index}
								name={patron.name}
								role={patron.role}
								img={patron.img}
							/>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Patrons;


const Card = ({ name, role, img }) => {
	return (
	  <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
		<img
		  src={img}
		  alt={img}
		  className="w-[230px] h-[270px] max-w-[230px] max-h-[270px] rounded-lg mx-auto"
		/>
		<p className="text-white text-lg text-center">{name}</p>
		<p className="text-gray-400 text-sm text-center">{role}</p>
	  </div>
	);
  };