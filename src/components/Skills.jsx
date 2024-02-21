import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full  
      md:text-light cursor-pointer  shadow-dark absolute  md:dark:text-dark dark:bg-light md:dark:bg-light
        px-3 py-1.5 lg:py-3 lg:px-6 text-sm md:py-2 md:px-6 bg-transparent dark:bg-transparent md:bg-dark font-bold md:font-semibold text-dark dark:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold !text-5xl md:!text-7xl lg:!text-8xl mt-64 w-full text-center">
        Skills
      </h2>
      <div
        className="w-full  relative flex items-center justify-center
       rounded-full h-[50vh] sm:h-[60vh] lg:h-[80vh] xl:h-screen
       bg-circularLightSm dark:bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd lg:bg-circularLightLg lg:dark:bg-circularDarkLg xl:bg-circularLightXl xl:dark:bg-circularDarkXl"
      >
        <motion.div
          className="flex bg-dark font-semibold items-center 
        justify-center rounded-full text-light  shadow-black cursor-pointer 
        dark:text-dark dark:bg-light p-2 text-xs md:p-4 lg:p-6 xl:p-8
        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="Django" x="-20vw" y="2vw" />
        <Skill name="Springboot" x="-5vw" y="-10vw" />
        <Skill name="ReactJS" x="20vw" y="6vw" />
        <Skill name="Python" x="0vw" y="12vw" />
        <Skill name="Javascript" x="0vw" y="19vw" />
        <Skill name="Java" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="15vw" y="-12vw" />
        <Skill name="NextJS" x="32vw" y="-5vw" />
        <Skill name="TailwindCSS" x="0vw" y="-20vw" />
        <Skill name="Unity Engine" x="-25vw" y="18vw" />
        <Skill name="Blender" x="18vw" y="18vw" />
        <Skill name="Figma" x="-35vw" y="6vw" />
        <Skill name="Photoshop" x="-23vw" y="12vw" />
        <Skill name="FlutterJS" x="-35vw" y="-6vw" />
        <Skill name="C#" x="14vw" y="-2vw" />
      </div>
    </>
  );
};

export default Skills;
