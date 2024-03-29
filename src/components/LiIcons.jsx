import React from "react";
import { motion, useScroll } from "framer-motion";
const LiIcons = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 h-[30px] w-[40px] md:h-[60px] md:w-[60px]"
        width="75"
        height="75"
        viewBox="0 0 100 100 "
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[7px]"
        />
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcons;
