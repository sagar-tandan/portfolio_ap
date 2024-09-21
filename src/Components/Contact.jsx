import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-10 pt-10 pb-20 max-w-screen-xl mx-auto text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="w-full text-center text-4xl tracking-wide"
      >
        Get in Touch
      </motion.h1>

      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          Biratnagar-7, Mealen Chowk
        </motion.h1>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href={`mailto:anushkapokharel200@gmail.com`}
          className="border-b cursor-pointer"
        >
          anushkapokharel200@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
