import React from "react";
import { CircularText } from "./icons";
import { animate } from "framer-motion";
import Link from "next/link";
const HireMe = () => {
  return (
    <div className="fixed lg:hidden flex items-center justify-center overflow-hidden 
     left-auto bottom-auto top-0 right-0 md:right-4">
      <div className="lg:w-48 h-auto flex items-center justify-center w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:kdsean11@gmail.com"
          className="flex items-center justify-center 
        absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-light bg-dark 
        shadow-md  border border-solid border-dark lg:w-20 lg:h-20 rounded-full font-semibold
        hover:bg-light hover:text-dark 
        
        dark:bg-light dark:text-dark 
                   hover:dark:bg-dark hover:dark:text-light hover:dark:border-light w-12 h-12 text-[10px]"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
