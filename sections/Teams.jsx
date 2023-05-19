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
        <section className={`${styles.paddings} relative z-10`} id="about">
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

                <TypingText title="They did something" textStyles="text-center" />

                {/* <div className="grid gap-4 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4">
                    {images.map((image, index) => (
                        // <motion.img
                        //     key={index}
                        //     src={image}
                        //     alt={`Image ${index + 1}`}
                        //     className="col-span-1 w-[150px] h-[150px] object-cover"
                        // />
                        <div
                            key={index}
                            className="aspect-w-1 aspect-h-1"
                        >
                            <div className="w-[150px] h-[150px]">
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className={` ${styles.topPaddings} grid grid-cols-8 gap-0 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-8`}>
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="object-cover w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[80px] sm:w-[50px] sm:h-[50px] border"
                        />
                    ))}

                    {/* THIS IS FOR LOOPING OVER SAME IMAGE N TIMES WITHOUT AN ARRAY */}
                    {/* {Array(80).fill().map((_, index) => (
                        <motion.img
                            key={index}
                            src="/founder.jpg"
                            alt={`Image ${index + 1}`}
                            className="object-cover w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] md:w-[90px] md:h-[80px] sm:w-[50px] sm:h-[50px] border"
                        />
                    ))} */}
                </div>
            </motion.div>
        </section>
    )
}

export default Teams