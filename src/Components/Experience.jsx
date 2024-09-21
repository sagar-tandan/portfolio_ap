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
              I am a lecturer at Eastern College of Engineering, Purwanchal
              University, teaching C++ and Numerical Methods to undergraduates,
              focusing on building a strong programming and computational
              foundation for practical applications.
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
              After graduation, I worked as a computer science teacher for Plus
              Two students at Kasturi Academy, teaching programming languages
              like C, HTML, JavaScript, and CSS, as well as core computer
              science subjects based on the National Examination Board syllabus.
              I also conducted bootcamps on Artificial Intelligence and Cloud
              Computing.
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
              I served as the vice president of the Nepal Student Union, a
              student organization dedicated to the welfare of students
              collaborated with the campus committee. During my tenure, we
              organized various technical workshops, including web development
              and hackathons, and arranged inter-college sports competitions
              such as cricket and football.
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
              I was a general member of the ERC Girls Society, an initiative
              formed by female students at our campus to support women in the
              field of technology. The society worked to address challenges
              faced by female students and organized various programs to promote
              their growth and engagement in tech.
            </span>
          </motion.div>
        </div>
      </section>

      <hr className="border-neutral-900 mt-10" />
    </div>
  );
};

export default Experience;
