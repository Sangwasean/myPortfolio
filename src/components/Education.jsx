import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ time, type, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl ">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold w-full text-center mb-8 md:mb-16 !text-5xl md:!text-7xl lg:!text-8xl">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative md:w-full lg:w-[80%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="origin-top bg-dark h-full w-[2px] md:w-[4px] absolute left-5 md:left-7 top-0 dark:bg-light"
        />
        <ul className="flex justify-between w-full items-start flex-col ml-2 sm:ml-4">
          <Details
            type="Highschool Graduate"
            time="2022-2025"
            place="Rwanda Coding Academy(RCA)"
            info="Relevant courses included Data Structures and Algorithms,Fullstack web dev,3D Modelling,Java,and Artificial Intelligence."
          />
          <Details
            type="Graduate"
            time="2019-2022"
            place="Groupe Scolaire Oficielle de BUTARE(GSOB)"
            info="Relevant courses included Advanced Maths,Physics and Computer science."
            className="border border-dark"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
