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

                <TypingText title="The ones responsible for an amazing Utsav-23" textStyles="text-center" />

                <div className={` ${styles.topPaddings} grid grid-cols-6 gap-0 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 `}>
                    {imageData.map((image, index) => (
                        <motion.img
                            key={index}
                            src={`data:image/png;base64,${image.encoding}`}
                            alt={`${image.name}`}
                            className="brightness-100 hover:brightness-125 object-cover w-[97px] h-[80px] lg:w-[97px] lg:h-[80px] md:w-[97px] md:h-[80px] sm:w-[97px] sm:h-[80px] "
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Teams