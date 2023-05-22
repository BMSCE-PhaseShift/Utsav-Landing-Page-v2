import { useEffect, useState } from "react";
import map from "../ocmap.json"
import { motion } from "framer-motion";
import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

let teamList = [];

const Team = ({ data }) => {
  const teams = shuffle(data.fileNames);
  teamList = teams;
  const size = useWindowSize();

  if (size.width) {
    return (
      <section className={`relative z-10`} id="team">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`mx-auto flex-col`}
            >
                <TitleText
                    title={<>MEET THE TEAM</>}
                    textStyles="text-center cinzel-font text-hp-yellow"
                />

            </motion.div>
        <div className="wrapper pt-[50px]">
          <div
            style={{
              height: "100%",
              pointerEvents: "none",
              position: "absolute",
              paddingTop: "100px",
              textAlign: "center",
              width: "100%",
              fontSize: "2.5rem",
              overflow: "hidden",
              zIndex: "4",
              width: "100%",
              top: "0"
            }}
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h4 style={{ color: "white", textShadow: "#111 1px 0 10px" }}>
                These people are the backbone of Utsav-23.
              </h4>
            </div>
          </div>
          <div style={{ width: size.width - 5, overflow: "hidden" }}>
            <div className="flex flex-wrap justify-center">
              {teamList.map((item, index) => (
                <div
                  key={index}
                  className="bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/output/${item}')`,
                    position: "relative",
                    width: size.width > 1200
                      ? `${size.width / 16 - 0.5}px`
                      : size.width > 768
                      ? `${size.width / 8 - 0.7}px`
                      : `${size.width / 6 - 1}px`
                  }}
                >
                  <div
                    className="layer"
                    style={{ height: "80px" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Team;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
