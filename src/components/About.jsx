import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full sm:w-[250px] mx-8">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center mt-4">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="-mt-20 sm:mt-16 ml-2">
        <p className={`${styles.sectionSubText} text-sm ml-2 sm:text-base `}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ml-2 text-[30px] sm:text-[40px]`}>
          Overview
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 ml-2 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
      >
        I am a web developer with a passion for creating user-friendly web
        applications. I have experience in developing websites and web
        applications using modern technologies like React JS, Redux Toolkit, and
        Tailwind CSS. I am also a content creator and have experience in
        creating content for websites and social media platforms.
      </motion.p>

      <div className="mt-16 mx-8sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWapper(About, "about");
