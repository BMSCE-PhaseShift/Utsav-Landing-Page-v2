"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import arrowImg from "../public/arrow.svg";

const InsightCard = ({ name, role, index }) => (
	<motion.div
		variants={fadeIn("up", "tween", 0.2, 1)}
		className="flex md:flex-row flex-col gap-4"
	>
		<div className="w-full flex flex-1 justify-start items-center sm:flex-col flex-row">
			<div className="flex-1 mx-[15px] my-[10px] md:ml-[50px] flex flex-col justify-center">
				{/* add Image */}
				<div 
					className="flex flex-row justify-center items-center"
				>
					<Image
					src={"/output/001-rahul.jpg"}
					alt="arrow"
					width={120}
					height={120}
					className="w-[120px] h-[120px] object-cover"
					/>
				</div>
				
				<p className="font-normal lg:text-[20px] text-[18px] text-white text-center">
					{name}
				</p>
				<p className="text-center font-normal lg:text-[15px] text-[14px] text-gray-400 ">
					{role}
				</p>
			</div>
		</div>
	</motion.div>
);

export default InsightCard;
