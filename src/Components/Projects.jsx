import React from "react";
import { motion } from "framer-motion";
import minor from "../assets/minor.jpeg";
import major from "../assets/major.jpeg";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-10 p-10 max-w-screen-xl mx-auto text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="w-full text-center text-4xl mb-3 tracking-wide"
      >
        Projects
      </motion.h1>

      <div className="w-full flex lg:gap-10 md:justify-between max-w-screen-md mx-auto md:flex-row flex-col gap-5">
        <motion.a
          href="https://drive.google.com/file/d/1sDl7m2FEPyLa7OoityGhKPxpctaqpST6/view?usp=drive_link"
          target="_blank"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-[#9a9a9a] font-medium md:w-[200px] w-full"
        >
          <img
            className="w-full md:h-[180px] h-[300px] object-cover rounded-md"
            src={minor}
            alt=""
          />
        </motion.a>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="max-w-xl flex flex-col gap-2"
        >
          <h1 className="font-normal text-[18px]">Hair Fall Prediction</h1>
          <span className="max-w-xl text-[#9a9a9a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            inventore, qui illum dolor nobis modi fugiat aspernatur, harum
            dignissimos cumque cupiditate quos quibusdam tempore velit molestiae
            magnam cum. Necessitatibus iste dolore expedita. Quis.
          </span>
          <div className="flex gap-3 flex-wrap text-sm">
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              HTML
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              CSS
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              JavaScript
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              Keras
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              Python
            </span>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex lg:gap-10 md:justify-between max-w-screen-md mx-auto md:flex-row flex-col gap-5">
        <motion.a
          href="https://drive.google.com/file/d/1hKQfW0YWUBUlkstTBeX6CzrgVX__2Hnx/view?usp=drive_link"
          target="_blank"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-[#9a9a9a] font-medium md:w-[200px] w-full"
        >
          <img
            className="w-full md:h-[180px] h-[300px] object-cover rounded-md"
            src={major}
            alt=""
          />
        </motion.a>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="max-w-xl flex flex-col gap-2"
        >
          <h1 className="font-normal text-[18px]">
            Realtime Object detection-based self-driving car
          </h1>
          <span className="max-w-xl text-[#9a9a9a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            inventore, qui illum dolor nobis modi fugiat aspernatur, harum
            dignissimos cumque cupiditate quos quibusdam tempore velit molestiae
            magnam cum. Necessitatibus iste dolore expedita. Quis.
          </span>

          <div className="flex gap-3 flex-wrap text-sm">
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              MobileNet SSD
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              OpenCV
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              TensorFlow
            </span>
            <span className="bg-neutral-900 text-white px-4 py-1 rounded-sm">
              Python
            </span>
          </div>
        </motion.div>
      </div>
      <hr className="border-neutral-900 mt-10" />
    </div>
  );
};

export default Projects;
