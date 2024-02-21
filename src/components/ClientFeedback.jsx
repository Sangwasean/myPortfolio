import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";

const ClientFeedback = ({ feedbackList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="client-feedback-container">
      <h2 className="w-full my-16 flex flex-col items-center justify-center dark:text-light">
        <AnimatedText
          text="Our clients feedback"
          className="mb-8 md:mb-16 !text-5xl md:!text-7xl lg:!text-8xl "
        />
      </h2>
      <AnimatePresence exitBeforeEnter={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="feedback-card w-full flex items-center rounded-3xl justify-between relative
          border border-solid border-dark bg-white shadow-2xl p-12 rounded-br-2xl dark:bg-dark
           dark:border-light flex-col lg:flex-row"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <p className="feedback-text font-bold text-base md:text-xl lg:text-2xl">
            {feedbackList[currentIndex].text}
          </p>
          <p className="feedback-author font-bold text-primary dark:text-primaryDark text-lg md:text-xl lg:text-2xl">
            {feedbackList[currentIndex].author}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-3 navigation-button space-x-4 text-xl font-bold">
        <button
          onClick={handlePrev}
          className="font-bold text-light bg-dark rounded-lg ml-4 p-2  dark:bg-light
             dark:text-black text-base px-4 md:px-6 md:text-lg"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="font-bold text-light bg-dark rounded-lg ml-4 p-2  dark:bg-light
             dark:text-black text-base px-4 md:px-6 md:text-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClientFeedback;
