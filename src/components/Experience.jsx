import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold w-full text-center mb-8 md:mb-16 !text-5xl md:!text-7xl lg:!text-8xl">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative md:w-full lg:w-[90%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="origin-top bg-dark h-full w-[2px] md:w-[4px] absolute left-5 md:left-7 top-0 dark:bg-light"
        />
        <ul className="flex justify-between w-full items-start flex-col ml-2 sm:ml-4 ">
          <Details
            position="Frontend developer"
            company="APZ-sign"
            time="2023"
            address="USA"
            work="Worked on a team at APZ-Sign a company that uses e-signature to be associated with
            handwritten documents and scribblings and authenticate documents"
          />
          <Details
            position="Marketing agent"
            company="Xenziz services"
            time="2023"
            address="INDIA"
            companyLink={"https://xenziz.com"}
            work="Worked as a marketing agent at xenziz services, a company that AI bots for ecommerce companies
            to automate and lead customers throught the web store with the least worker interaction"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
