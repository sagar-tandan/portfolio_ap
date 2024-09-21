import React from "react";
import nepal from "../assets/nepal.png";
import japan from "../assets/japan.png";
import english from "../assets/eng.png";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const LanguageSkill = () => {
  return (
    <div className="w-full flex flex-col gap-10 p-10 max-w-screen-xl mx-auto text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="w-full text-center text-4xl mb-3 tracking-wide"
      >
        Language Skills
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="w-full flex gap-4 justify-center flex-wrap"
      >
        <div className="flex gap-5 border-[3px] border-neutral-800 px-6 py-2 rounded-md">
          <img className="w-10 h-10 object-cover" src={nepal} alt="" />
          <div className="flex flex-col w-[200px]">
            <h1>Nepali</h1>
            <span>Native Lanuage</span>
          </div>
        </div>

        <div className="flex gap-5 border-[3px] border-neutral-800 px-6 py-2 rounded-md">
          <img className="w-10 h-10 object-cover" src={english} alt="" />
          <div className="flex flex-col w-[200px]">
            <h1>English</h1>
            <span>Fluent (IELTS : 7.5)</span>
          </div>
        </div>

        <div className="flex gap-5 border-[3px] border-neutral-800 px-6 py-2 rounded-md">
          <img className="w-10 h-10 object-cover" src={japan} alt="" />
          <div className="flex flex-col w-[200px] ">
            <h1>Japanese</h1>
            <span>N4 level </span>
          </div>
        </div>
      </motion.div>
      <hr className="border-neutral-900 mt-10" />
    </div>
  );
};

export default LanguageSkill;
