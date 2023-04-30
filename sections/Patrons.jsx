"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { insights } from "../constants";
import { staggerContainer } from "../utils/motion";
import { InsightCard, TitleText, TypingText, SubtitleText } from "../components";
import { fadeIn } from "../utils/motion";
import { patrons , adv , fac, stu} from "../constants";
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
                className="flex flex-wrap justify-center items-center"
            >
                
                {patrons.map((patron, index) => (
                    <InsightCard
                        key={index}
                        index={index}
                        name={patron.name}
                        role={patron.role}
                        imgStyles="w-[150px] h-[150px] object-contain"
                        textStyles="text-white text-center"
                        containerStyles="w-[300px] h-[300px] flex flex-col justify-center items-center mx-[20px] my-[20px] bg-hp-blue rounded-[16px] shadow-lg"
                    />
                ))}
            </motion.div>
        </motion.div>

        <motion.div 
            className="mb-[25px]"   
        >
            <SubtitleText
                    title={<>Advisory Committee</>}
                    textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
                />
            <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="flex flex-wrap justify-center items-center"
            >
                
                {adv.map((patron, index) => (
                    <InsightCard
                        key={index}
                        index={index}
                        name={patron.name}
                        role={patron.role}
                        imgStyles="w-[150px] h-[150px] object-contain"
                        textStyles="text-white text-center"
                        containerStyles="w-[300px] h-[300px] flex flex-col justify-center items-center mx-[20px] my-[20px] bg-hp-blue rounded-[16px] shadow-lg"
                    />
                ))}
            </motion.div>
        </motion.div>

        <motion.div
            className="mb-[25px]"   
        >
            <SubtitleText
                    title={<>Faculty Core Committee</>}
                    textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
                />
            <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="flex flex-wrap justify-center items-center"
            >
                
                {fac.map((patron, index) => (
                    <InsightCard
                        key={index}
                        index={index}
                        name={patron.name}
                        role={patron.role}
                        imgStyles="w-[150px] h-[150px] object-contain"
                        textStyles="text-white text-center"
                        containerStyles="w-[300px] h-[300px] flex flex-col justify-center items-center mx-[20px] my-[20px] bg-hp-blue rounded-[16px] shadow-lg"
                    />
                ))}
            </motion.div>
        </motion.div>

        <motion.div
            className="mb-[25px]"   
        >
            <SubtitleText
                    title={<>Student Core Committee</>}
                    textStyles="text-center cinzel-font text-blue-400 font-bold text-[20px]"
                />
            <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="flex flex-wrap justify-center items-center"
            >
                
                {stu.map((patron, index) => (
                    <InsightCard
                        key={index}
                        index={index}
                        name={patron}
                        role={patron.role}
                        imgStyles="w-[150px] h-[150px] object-contain"
                        textStyles="text-white text-center"
                        containerStyles="w-[300px] h-[300px] flex flex-col justify-center items-center mx-[20px] my-[20px] bg-hp-blue rounded-[16px] shadow-lg"
                    />
                ))}
            </motion.div>
        </motion.div>

    </motion.div>
    </section>
    )
}

export default Patrons