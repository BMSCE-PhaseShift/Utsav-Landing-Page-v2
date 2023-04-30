"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import arrowImg from "../public/arrow.svg";

const InsightCard = ({ name, role, index }) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.5, 1)}
		className="flex md:flex-row flex-col gap-4 "
	>
		<div className="w-full flex justify-start items-center">
			<div className="flex-1 mx-[15px] my-[10px] md:ml-[50px] flex flex-col justify-start">
				<p className="font-normal lg:text-[20px] text-[14px] text-white">
					{name}
				</p>
				<p className="text-center font-normal lg:text-[15px] text-[14px] text-gray-100">
					{role}
				</p>
			</div>
		</div>
	</motion.div>
);

export default InsightCard;
