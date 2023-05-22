"use client";

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
// import data from "../output.json";
import { useState,useEffect } from "react";
// import fs from 'fs';
// import path from 'path';


const shuffleArray = (array) => {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
};

const Teams = ({data}) => {
    // write code to randomise the order of images
    // const [imageData, setImageData] = useState(shuffleArray(data));
    const [fileNames, setFileNames] = useState(data.fileNames);

    // useEffect(() => {
    //   const fetchFileNames = async () => {
    //     try {
    //       const response = await fetch('/api/files');
    //       const data = await response.json();
    //       setFileNames(data.fileNames);
    //     } catch (error) {
    //       console.error('Error fetching file names:', error);
    //     }
    //   };
  
    //   fetchFileNames();
    // }, []);
  
    // Use the `fileNames` array as needed
    console.log(fileNames);
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

                <div className={` ${styles.topPaddings} grid grid-cols-6 gap-0 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 `}>
                    {fileNames.map((image, index) => (
                        <motion.img
                            key={index}
                            src={`/output/${image}`}
                            alt={`${image.name}`}
                            className="brightness-100 hover:brightness-125 object-cover w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] "
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Teams

