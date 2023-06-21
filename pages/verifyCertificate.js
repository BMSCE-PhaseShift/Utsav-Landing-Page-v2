import React, { useState } from 'react';
import styles from "../styles";
import { motion } from "framer-motion";
import { TitleText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Navbar } from '../components';

const VerifyCertificate = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = jsonData.find((file) => file.filename === `${code}.pdf`);
    if (search) {
      console.log(search);
      setMatchingFile(search);
      setShowIframe(true);
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
              title={<>Verify Certificate</>}
              textStyles="text-center cinzel-font text-hp-yellow mt-8"
            />
            <div className=" flex flex-row justify-center items-center gap-4 mt-6">
              <motion.div
                className="lg:mx-[32px] font-normal text-[18px] text-center text-white"
              >
                <input type="text" placeholder="UR23OC033" value={code} onChange={(e) => setCode(e.target.value)} className="input input-bordered input-primary w-1/2 h-1/2 p-4 px-10 rounded-lg" />
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
                          rounded"
              >
                Submit
              </button>
            </div>

            <div className="container mx-auto mt-8">
              <iframe
                className="responsive-iframe"
                src="https://drive.google.com/file/d/1K6teX8llxA_paLIlR-a1TJhq9Yx1hFrC/preview"
              ></iframe>
            </div>
          </motion.div>
        </section>
      </div >
    </>
  );
};

export default VerifyCertificate;
