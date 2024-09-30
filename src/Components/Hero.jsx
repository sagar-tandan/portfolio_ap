import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import profile from "../assets/profilee.jpg";
import logo from "../assets/log.png";
import { motion } from "framer-motion";
import Cv from "../assets/CV.pdf";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-10 pt-10 pb-10 max-w-screen-2xl mx-auto overflow-x-hidden md:px-32 px-5">
      <nav className="w-full flex justify-between items-center">
        <a href="/">
          <img className="w-[70px]" src={logo} alt="img" />
        </a>
        <div className="flex gap-3 text-white ">
          <a
            href="https://www.linkedin.com/in/anushka-pokharel-697b571b4/"
            target="_blank"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com/anushka.pokharel.3304"
            target="_blank"
          >
            <FaSquareFacebook className="w-7 h-7" />
          </a>
          <a href="https://www.instagram.com/pokharelanushka/" target="_blank">
            <FaInstagram className="w-7 h-7" />
          </a>
        </div>
      </nav>

      <section className="w-full flex flex-col justify-between pt-5 sm:pt-16 pb-16 sm:pb-24 lg:flex-row ">
        <div className="w-full flex flex-col gap-3 sm:gap-5 items-center lg:items-start">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl z-[10] font-thin tracking-tight lg:mt-5 lg:text-7xl text-white text-center lg:text-left lg:mb-5"
          >
            Anushka Pokharel
          </motion.h1>
          <motion.span
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className=" bg-gradient-to-r from-pink-500  via-purple-500 to-white text-2xl sm:text-4xl font-light text-transparent bg-clip-text pb-1"
          >
            Computer Engineer
          </motion.span>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-full flex flex-col gap-5 items-center mt-1 lg:hidden"
          >
            <img
              className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] object-cover rounded-md"
              src={profile}
              alt="profile"
            />
          </motion.div>

          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-white font-light max-w-lg lg:max-w-screen-2xl px-[2px] sm:px-0"
          >
            I am a computer engineer, graduated from the Institute of
            Engineering, Tribhuvan University in 2023. Currently, I am a
            lecturer at Eastern College of Engineering, affiliated with
            Purwanchal University, where I teach and mentor students in various
            computer science subjects. My passion for education and technology
            drives me to continually explore advancements in the field.
          </motion.p>

          <div className="text-white w-full lg:flex hidden">
            <motion.a
              // href="https://drive.google.com/file/d/1Rf8a5rFDoI7ExakeMoqS2247lRykAxIY/view?usp=drive_link"
              href={Cv}
              target="_blank"
              drag
              dragConstraints={{
                top: -10,
                left: -0,
                right: 100,
                bottom: 10,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-md font-normal text-white shadow-lg hover:shadow-2xl hover:brightness-90 text-center"
            >
              View CV
            </motion.a>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full flex-col gap-5 items-end justify-end lg:flex hidden"
        >
          <img
            src={profile}
            className="w-[400px] h-[400px] object-cover rounded-md"
            alt="profile"
          />
        </motion.div>

        <div className="text-white w-full lg:hidden flex items-center justify-center mt-6">
          <motion.a
            // href="https://drive.google.com/file/d/1Rf8a5rFDoI7ExakeMoqS2247lRykAxIY/view?usp=drive_link"
            href={Cv}
            target="_blank"
            drag
            dragConstraints={{
              top: -10,
              left: -0,
              right: 100,
              bottom: 10,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-[300px] sm:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-md font-normal text-white shadow-lg hover:shadow-2xl hover:brightness-90 text-center"
          >
            View CV
          </motion.a>
        </div>
      </section>
      <hr className="border-neutral-900" />
    </div>
  );
};

export default Hero;
