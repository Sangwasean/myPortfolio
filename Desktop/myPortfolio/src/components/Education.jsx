import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ time,type,place,info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="origin-top bg-dark h-full w-[4px] absolute left-9 top-0 dark:bg-light"
        />
        <ul className="flex justify-between w-full items-start flex-col ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2022-2025"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
