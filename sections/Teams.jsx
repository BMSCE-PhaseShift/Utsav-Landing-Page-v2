"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Teams = () => {
    // Array of image URLs
    const images = [
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
        '/founder.jpg',
    ];

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

                <div className={` ${styles.topPaddings} grid grid-cols-8 gap-0 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-8`}>
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="brightness-100 hover:brightness-125 object-cover w-[97px] h-[80px] lg:w-[97px] lg:h-[80px] md:w-[90px] md:h-[80px] sm:w-[80px] sm:h-[80px] "
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Teams