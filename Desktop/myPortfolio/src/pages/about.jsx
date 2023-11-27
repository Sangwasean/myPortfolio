import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Exprerience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Sean | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText text="Passion fuels purpose! " className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="flex col-span-3 flex-col items-center justify-start ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                Biography
              </h2>
              <p className=" font-semibold">
                Hi, Im Sean, a web developer and UI/UX designer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. With 4 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients
                visions to life.
              </p>
              <p className="font-semibold my-4">
                I believe that design is about more than just making things look
                pretty its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-semibold">
                Whether Im working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light p-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " />
              <Image
                src={"/images/profile/sean2.png"}
                alt="profile"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="col-span-2 flex flex-col item justify-between">
              <div className="flex items flex-col justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="text-xl font-semibold capitalize text-dark dark:text-light">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex items flex-col justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-semibold capitalize text-dark dark:text-light">
                  Projects completed
                </h2>
              </div>
              <div className="flex items flex-col justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-semibold capitalize text-dark dark:text-light">
                  Years of experiance
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Exprerience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
