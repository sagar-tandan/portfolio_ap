import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-10 pt-10 pb-5 max-w-screen-xl mx-auto text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="w-full text-center text-4xl mb-6 tracking-wide"
      >
        Experience
      </motion.h1>

      <section className="w-full flex flex-col gap-8">
        <div className="w-full flex lg:gap-10 lg:justify-between max-w-screen-md mx-auto lg:flex-row flex-col gap-2">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-[#9a9a9a] font-medium"
          >
            2024 - Present
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="max-w-xl flex flex-col gap-2"
          >
            <h1 className="font-normal text-[18px]">
              Lecturer -{" "}
              <span className="text-[16px] font-normal">
                Eastern College of Engineering
              </span>
            </h1>
            <span className="max-w-xl text-[#9a9a9a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              inventore, qui illum dolor nobis modi fugiat aspernatur, harum
              dignissimos cumque cupiditate quos quibusdam tempore velit
              molestiae magnam cum. Necessitatibus iste dolore expedita. Quis.
            </span>
          </motion.div>
        </div>

        <div className="w-full flex lg:gap-10 lg:justify-between max-w-screen-md mx-auto lg:flex-row flex-col gap-2">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-[#9a9a9a] font-medium"
          >
            2023 - 2024
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="max-w-xl flex flex-col gap-2"
          >
            <h1 className="font-normal text-[18px]">
              Lecturer -{" "}
              <span className="text-[16px] font-normal">Kasturi College</span>
            </h1>
            <span className="max-w-xl text-[#9a9a9a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              inventore, qui illum dolor nobis modi fugiat aspernatur, harum
              dignissimos cumque cupiditate quos quibusdam tempore velit
              molestiae magnam cum. Necessitatibus iste dolore expedita. Quis.
            </span>
          </motion.div>
        </div>

        <div className="w-full flex lg:gap-10 lg:justify-between max-w-screen-md mx-auto lg:flex-row flex-col gap-2">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-[#9a9a9a] font-medium"
          >
            2022 - 2023
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="max-w-xl flex flex-col gap-2"
          >
            <h1 className="font-normal text-[18px]">
              Vice-President -{" "}
              <span className="text-[16px] font-normal">
                Nepal Student Union
              </span>
            </h1>
            <span className="max-w-xl text-[#9a9a9a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              inventore, qui illum dolor nobis modi fugiat aspernatur, harum
              dignissimos cumque cupiditate quos quibusdam tempore velit
              molestiae magnam cum. Necessitatibus iste dolore expedita. Quis.
            </span>
          </motion.div>
        </div>

        <div className="w-full flex lg:gap-10 lg:justify-between max-w-screen-md mx-auto lg:flex-row flex-col gap-2">
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-[#9a9a9a] font-medium"
          >
            2020 - 2021
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="max-w-xl flex flex-col gap-2"
          >
            <h1 className="font-normal text-[18px]">
              General member -{" "}
              <span className="text-[16px] font-normal">ERC Girls Society</span>
            </h1>
            <span className="max-w-xl text-[#9a9a9a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              inventore, qui illum dolor nobis modi fugiat aspernatur, harum
              dignissimos cumque cupiditate quos quibusdam tempore velit
              molestiae magnam cum. Necessitatibus iste dolore expedita. Quis.
            </span>
          </motion.div>
        </div>
      </section>

      <hr className="border-neutral-900" />
    </div>
  );
};

export default Experience;
