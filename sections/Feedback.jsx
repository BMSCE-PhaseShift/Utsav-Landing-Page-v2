// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// import styles from "../styles";
// import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
// import planet09 from "../public/planet-09.png";

// const Feedback = () => (
// 	<section className={`${styles.paddings}`}>
// 		<motion.div
// 			variants={staggerContainer}
// 			initial="hidden"
// 			whileInView="show"
// 			viewport={{ once: false, amount: 0.25 }}
// 			className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
// 		>
// 			<motion.div
// 				variants={fadeIn("right", "tween", 0.2, 1)}
// 				className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
// 			>
// 				<div className="feedback-gradient" />
// 				<div>
// 					<h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
// 						Rahul Anil Nayak
// 					</h4>
// 					<p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
// 						Software Developer
// 					</p>
// 				</div>

// 				<p className="mt-[18px] font-normal sm:text-[24px] text-[18px] text-white">
// 					“Tech geek! Never met a person with more zeal and passion for computer
// 					science and its application. Has amazing domain knowledge in deep
// 					learning, web development and IoT and is highly recommended for these
// 					roles. I can vouch for Navaneeth to be the most hardworking worker in
// 					the room.”
// 				</p>
// 			</motion.div>

// 			<motion.div
// 				variants={fadeIn("left", "tween", 0.2, 1)}
// 				className="relative flex-1 flex justify-center items-center"
// 			>
// 				<Image
// 					src={planet09}
// 					alt="planet-09"
// 					className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
// 				/>

// 				{/* <motion.div
//           variants={zoomIn(0.4, 1)}
//           className="lg:block hidden absolute -left-[10%] top-[3%]"
//         >
//           <img
//             src="/stamp.png"
//             alt="stamp"
//             className="w-[155px] h-[155px] object-contain"
//           />
//         </motion.div> */}
// 			</motion.div>
// 		</motion.div>
// 	</section>
// );

// export default Feedback;
