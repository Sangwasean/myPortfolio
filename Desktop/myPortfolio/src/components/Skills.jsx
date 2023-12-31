import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark font-semibold
        text-light cursor-pointer py-3 px-6 shadow-dark absolute  dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition:{ duration: 1.5}}}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div
        className="w-full h-screen relative flex items-center justify-center
       rounded-full bg-circularLight dark:bg-circularDark"
      >
        <motion.div
          className="flex bg-dark font-semibold items-center 
        justify-center rounded-full text-light p-8 shadow-black cursor-pointer 
        dark:text-dark dark:bg-light
        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-20vw" y="2vw" />
        <Skill name="HTML" x="-5vw" y="-10vw" />
        <Skill name="ReactJS" x="20vw" y="6vw" />
        <Skill name="Python" x="0vw" y="12vw" />
        <Skill name="Javascript" x="0vw" y="19vw" />
        <Skill name="Java" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="15vw" y="-12vw" />
        <Skill name="NextJS" x="32vw" y="-5vw" />
        <Skill name="TailwindCSS" x="0vw" y="-20vw" />
        <Skill name="Unity Engine" x="-25vw" y="18vw" />
        <Skill name="Blender" x="18vw" y="18vw" />
        <Skill name="Figma&Photoshop" x="-35vw" y="6vw" />
        <Skill name="FlutterJS" x="-35vw" y="-6vw" />
        <Skill name="C#" x="14vw" y="-2vw" />
      </div>
    </>
  );
};

export default Skills;
