"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import data from "../output.json";
import { useState } from "react";

const shuffleArray = (array) => {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
};

const Teams = () => {
    // write code to randomise the order of images
    const [imageData, setImageData] = useState(shuffleArray(data));

    return (
        <section className={`${styles.paddings} relative z-10`} id="team">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TitleText
                    title={<>MEET THE TEAM</>}
                    textStyles="text-center cinzel-font text-hp-yellow"
                />

                <TypingText title="The ones responsible" textStyles="text-center" />
                <TypingText title="for an amazing Utsav-23" textStyles="text-center" />

                <div className={` ${styles.topPaddings} grid grid-cols-8 gap-0 sm:grid-cols-8 md:grid-cols-18 lg:grid-cols-24 `}>
                    {imageData.map((image, index) => (
                        <motion.img
                            key={index}
                            src={`data:image/png;base64,${image.encoding}`}
                            alt={`${image.name}`}
                            className="brightness-100 hover:brightness-125 object-cover w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] "
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Teams