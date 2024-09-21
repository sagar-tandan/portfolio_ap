import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-10 py-5 max-w-screen-xl mx-auto text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="w-full text-center text-4xl mb-6 tracking-wide"
      >
        About Me
      </motion.h1>
      <div className="w-full gap-10 flex">
        <div className="w-[400px] flex">
          <img
            className="w-full h-[400px] object-cover rounded-md"
            src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/441147127_1665013174235840_4518282713971350956_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LAgZt_qOGi0Q7kNvgFohLA-&_nc_ht=scontent.fktm19-1.fna&_nc_gid=AIKL3r1hGVVKfQKKsFf4MzD&oh=00_AYA-3CoZub8Hp11vKh-35Bjfdtsul1mUnd0JsRIIFSHf2A&oe=66F46A3D"
            alt=""
          />
        </div>

        <p className="font-thin w-full max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          deserunt dolorem, voluptatibus, numquam sequi tenetur molestias dolore
          soluta itaque labore blanditiis ratione. Perspiciatis rerum ea aperiam
          accusamus nulla voluptatem quaerat, veniam, repudiandae unde saepe non
          nihil vitae perferendis fugit. Culpa magnam id laboriosam nisi ullam
          quaerat? Ex delectus aut maxime excepturi labore dicta enim ad ab
          inventore quibusdam, laudantium quo.
        </p>
      </div>
    </div>
  );
};

export default About;
