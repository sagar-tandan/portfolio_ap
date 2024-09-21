import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";

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

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-10 p-10 max-w-screen-xl mx-auto text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="w-full text-center text-4xl mb-6 tracking-wide"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="w-full flex gap-6 justify-center"
      >
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <IoLogoHtml5 className="w-16 h-16 text-[#dc4923]" />
        </motion.div>
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <FaJsSquare className="w-16 h-16 text-[#efd71c]" />
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <IoLogoReact className="w-16 h-16 text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <SiMysql className="w-16 h-16 text-white" />
        </motion.div>
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <SiPython className="w-16 h-16 text-[#366b98]" />
        </motion.div>
        <motion.div
          variants={iconVarients(3.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <SiCplusplus className="w-16 h-16 text-[#5b90c8]" />
        </motion.div>
        {/* <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <FaPhp className="w-16 h-16 text-[#818eba]" />
        </motion.div> */}
        {/* <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-3 rounded-2xl"
        >
          <GiArtificialIntelligence className="w-16 h-16 text-[#1297be]" />
        </motion.div> */}
      </motion.div>
      <hr className="border-neutral-900" />
    </div>
  );
};

export default Skills;
