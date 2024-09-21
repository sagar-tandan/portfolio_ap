import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import logo from "../assets/anu.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full flex flex-col gap-10 p-10 max-w-screen-xl mx-auto overflow-x-hidden">
      <nav className="w-full flex justify-between items-center">
        <img className="w-[50px]" src="" alt="img" />
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

      <section className="w-full flex flex-col justify-between pt-20 pb-10 lg:flex-row ">
        <div className="w-full flex flex-col gap-3 sm:gap-5 items-center lg:items-start">
          <h1 className="text-4xl sm:text-6xl font-thin tracking-tight lg:mt-5 lg:text-7xl text-white text-center lg:text-left lg:mb-5">
            Anushka Pokharel
          </h1>
          <span className=" bg-gradient-to-r from-pink-500  via-purple-500 to-white text-2xl sm:text-4xl font-light text-transparent bg-clip-text pb-1">
            Computer Engineer
          </span>

          <div className="w-full flex flex-col gap-5 items-center mt-1 lg:hidden">
            <img
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover rounded-md"
              src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/441147127_1665013174235840_4518282713971350956_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LAgZt_qOGi0Q7kNvgFohLA-&_nc_ht=scontent.fktm19-1.fna&_nc_gid=AIKL3r1hGVVKfQKKsFf4MzD&oh=00_AYA-3CoZub8Hp11vKh-35Bjfdtsul1mUnd0JsRIIFSHf2A&oe=66F46A3D"
              alt=""
            />
          </div>

          <p className="text-white font-light max-w-lg lg:max-w-screen-2xl px-[2px] sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            adipisci perferendis libero dolor maxime, sapiente, distinctio
            debitis vitae corrupti molestias aperiam modi veniam soluta non
            temporibus a recusandae aliquid consequuntur amet nesciunt rerum.
            Enim amet nemo ipsa deserunt laborum ad itaque aperiam tempora
            dolores.
          </p>

          <div className="text-white w-full lg:flex hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -10,
                left: -0,
                right: 100,
                bottom: 10,
              }}
              className="w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-md font-normal text-white shadow-lg hover:shadow-2xl hover:brightness-90"
            >
              View CV
            </motion.button>
          </div>
        </div>

        <div className="w-full flex-col gap-5 items-end justify-end lg:flex hidden">
          <img
            className="w-[400px] h-[400px] object-cover rounded-md"
            src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/441147127_1665013174235840_4518282713971350956_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LAgZt_qOGi0Q7kNvgFohLA-&_nc_ht=scontent.fktm19-1.fna&_nc_gid=AIKL3r1hGVVKfQKKsFf4MzD&oh=00_AYA-3CoZub8Hp11vKh-35Bjfdtsul1mUnd0JsRIIFSHf2A&oe=66F46A3D"
            alt=""
          />
        </div>

        <div className="text-white w-full lg:hidden flex items-center justify-center mt-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{
              top: -10,
              left: -0,
              right: 100,
              bottom: 10,
            }}
            className="w-[300px] sm:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-md font-normal text-white shadow-lg hover:shadow-2xl hover:brightness-90"
          >
            View CV
          </motion.button>
        </div>
      </section>
      <hr  className="border-neutral-900"/>
    </div>
  );
};

export default Hero;
