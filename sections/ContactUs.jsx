"use client";

import { motion } from "framer-motion";
import { BiMap } from "react-icons/bi";
import { MdCopyright, MdEmail } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
import { TitleText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const ContactUs = () => (
	<section className={`${styles.paddings} relative z-0 h-screen`} id="contact">
		<div className="gradient-02 z-0" />
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TitleText
				title={<>Get In Touch</>}
				textStyles="text-center cinzel-font text-hp-yellow"
			/>

			<motion.p
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="mt-[16px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center sm:text-center text-white"
			>
				Our Social Media Handles
			</motion.p>

			{/* social icons */}
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="flex items-center justify-center"
			>
				<SocialIcon
					target="_blank"
					rel="noreferrer"
					style={{ margin: "10px" }}
					url="https://www.youtube.com/@BMSCE_UTSAV"
					fgColor="#FF0000"
					bgColor="#ffffff"
				/>
				<SocialIcon
					target="_blank"
					rel="noreferrer"
					style={{ margin: "10px" }}
					url="https://www.instagram.com/bmsce_utsav/"
					fgColor="#E1306C"
					bgColor="#ffffff"
				/>
				<SocialIcon
					target="_blank"
					rel="noreferrer"
					style={{ margin: "10px" }}
					url="https://www.facebook.com/utsavbmsce/"
					fgColor="#4267B2"
					bgColor="#ffffff"
				/>
				<SocialIcon
					target="_blank"
					rel="noreferrer"
					style={{ margin: "10px" }}
					url="https://twitter.com/bmsce_utsav"
					fgColor="#1DA1F2"
					bgColor="#ffffff"
				/>
			</motion.div>

			{/* bmsce */}
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="flex items-center justify-center mt-6"
			>
				<a
					href="https://www.bmsce.ac.in/"
					target="_blank"
					rel="noreferrer"
					className="mt-[16px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center sm:text-center text-white"
				>
					<BiMap className="inline" />
					B. M. S. College of Engineering
				</a>
			</motion.div>

			{/* address */}
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="flex items-center justify-center"
			>
				<motion.p
					href="https://www.bmsce.ac.in/"
					target="_blank"
					rel="noreferrer"
					className="mt-[16px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-center text-white"
				>
					#1908, Bull Temple Road, Basavanagudi, Bangalore - 560019
				</motion.p>
			</motion.div>

			{/* email */}
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="flex items-center justify-center mt-6"
			>
				<motion.p
					target="_blank"
					rel="noreferrer"
					href="mailTo:utsav@bmsce.ac.in"
					className="mt-[16px] lg:mx-[32px] font-normal sm:text-[24px] text-[18px] text-left sm:text-center text-white"
				>
					<MdEmail className="inline" />
					utsav@bmsce.ac.in
				</motion.p>
			</motion.div>

			{/* copyright */}
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="flex items-center justify-center mt-6"
			>
				<a
					href="https://www.bmsce.ac.in/"
					target="_blank"
					rel="noreferrer"
					className="mt-[16px] lg:mx-[32px] font-normal sm:text-[20px] text-[16px] text-left sm:text-center text-secondary-white"
				>
					<MdCopyright className="inline" />
					Utsav 2023
				</a>
			</motion.div>
		</motion.div>
	</section>
);

export default ContactUs;
