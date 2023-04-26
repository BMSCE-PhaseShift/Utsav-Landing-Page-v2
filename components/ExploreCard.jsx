// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// import styles from "../styles";
// import { fadeIn } from "../utils/motion";
// import githubImg from "../public/github.svg";

// const ExploreCard = ({
// 	id,
// 	imgUrl,
// 	title,
// 	description,
// 	tech_stack,
// 	live_demo,
// 	github,
// 	index,
// 	active,
// 	handleClick,
// }) => (
// 	<motion.div
// 		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
// 		className={`relative ${
// 			active === id ? "lg:flex-[3.5] flex-[12]" : "lg:flex-[0.5] flex-[2]"
// 		} flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
// 		onClick={() => handleClick(id)}
// 	>
// 		<Image
// 			src={imgUrl}
// 			alt="planet-04"
// 			className="absolute w-full h-full object-cover rounded-[24px]"
// 		/>
// 		{active !== id ? (
// 			<h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
// 				{title}
// 			</h3>
// 		) : (
// 			<div className="absolute bottom-0 p-8 mt-5 flex justify-start w-full h-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] cursor-default">
// 				<div className="flex flex-row">
// 					{/* <div
//             className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] mr-[16px]`}
//           >
//             <img
//               src="/headset.svg"
//               alt="project link"
//               className="w-1/2 h-1/2 object-contain"
//             />
//           </div> */}

// 					<a
// 						className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] hover:scale-125 transition-all duration-300 ease-in-out`}
// 						href={github}
// 						target="_blank"
// 						rel="noreferrer"
// 					>
// 						<Image
// 							src={githubImg}
// 							alt="github"
// 							className="w-1/2 h-1/2 object-contain"
// 						/>
// 					</a>
// 				</div>
// 				<h2 className="font-semibold sm:text-[32px] text-[24px] mb-[16px] text-white">
// 					{title}
// 				</h2>
// 				<p className="font-normal text-[16px] leading-[20.16px] mb-[16px] text-white">
// 					{description}
// 				</p>
// 				<p className="font-normal text-[16px] leading-[20.16px] text-white">
// 					<b>Tech Stack: </b>
// 					{tech_stack}
// 				</p>
// 			</div>
// 		)}
// 	</motion.div>
// );

// export default ExploreCard;
