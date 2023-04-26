"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import arrowImg from "../public/arrow.svg";

const InsightCard = ({ imgUrl, company, role, duration, desc, index }) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.5, 1)}
		className="flex md:flex-row flex-col gap-4"
	>
		<Image
			src={imgUrl}
			alt="planet-01"
			className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
			width={10}
			height={30}
			unoptimized
		/>
		<div className="w-full flex justify-start items-center">
			<div className="flex-1 md:ml-[62px] flex flex-col justify-start">
				{/* <h3 className="font-normal lg:text-[42px] text-[26px] text-white">
					{company}
				</h3>
				<h4 className="font-normal lg:text-[32px] text-[20px] text-white">
					{role}
				</h4>
				<p className="font-normal lg:text-[20px] text-[14px] text-secondary-white">
					{duration}
				</p> */}
				<p className="font-normal lg:text-[20px] text-[14px] text-white">
					{desc}
				</p>
			</div>
		</div>
	</motion.div>
);

export default InsightCard;
