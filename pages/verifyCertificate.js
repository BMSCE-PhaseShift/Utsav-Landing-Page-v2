import React, { useState } from 'react';
import styles from "../styles";
import { motion } from "framer-motion";
import { TitleText,SubtitleText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import jsonData from "../utils/file_information.json";

const VerifyCertificate = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [code, setCode] = useState('');
  const [matchingFile, setMatchingFile] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const search = jsonData.find((file) => file.filename === `${code}.pdf`);
    if (search) {
      console.log(search);
      setMatchingFile(search);
      setShowIframe(true);
    }
    else{
        setShowIframe(false);
        alert("Invalid Certificate Code");
    }
  };

  return (
    <>
      <div className='my-bg overflow-hidden'>
        <section className={`relative z-10 h-screen`}>
          <motion.div
            className={`flex flex-col mb-8 `}
          >
            <TitleText
              title={<>Verify Utsav Certificate</>}
              textStyles="text-center cinzel-font text-hp-yellow mt-3"
            />
            {!showIframe && (
                // add text here
                <SubtitleText
                    title={<>Enter Certificate ID</>}
                    textStyles="text-center cinzel-font text-hp-purple mt-3"
                />
             )} 

            <div className=" flex flex-col md:flex-row justify-center items-center gap-3 sm:justify-around">
              <motion.div
                className="lg:mx-[32px] font-normal text-[18px] text-center text-white"
              >
                <input type="text" placeholder="UR23OC000" value={code} onChange={(e) => setCode(e.target.value)} className="input input-bordered input-secondary w-1/2 h-1/2 p-4 px-10 rounded-lg max-w-xs" />
              </motion.div>
              <button
                onClick={handleSubmit}
                className="w-[100px] md:w-[100px] bg-transparent 
                          hover:bg-yellow-300 text-yellow-200 
                          font-semibold hover:text-black p-4 
                          border border-yellow-500 
                          hover:border-transparent 
                          btn
                          h-1/2
                          mt-2
                          rounded"
                style={{marginTop: "10px"}}
              >
                View Certificate
              </button>
            </div>
            {showIframe && (
            <div className="container mx-auto">
              <iframe
                className="responsive-iframe"
                src={matchingFile.webviewlink}
              ></iframe>
            </div>
            )}
          </motion.div>
        </section>
      </div >
    </>
  );
};

export default VerifyCertificate;
