import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Exprerience from "@/components/Experience";
import Education from "@/components/Education";
import { TypeAnimation } from "react-type-animation";
import HireMe from "@/components/HireMe";

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
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light mt-2">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Ideas to Reality!"
            className="mb-8 md:mb-16 !text-5xl md:!text-7xl lg:!text-8xl"
          />
          <div className="grid w-full grid-cols-8 gap-8 md:gap-16">
            <div className="flex flex-col items-center justify-start order-2 md:order-1 col-span-8 md:col-span-3">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light ">
                Biography
              </h2>
              <div className="font-bold text-2xl leading-1">
                <span className="mr-4">Hi, I'm Sean, a</span>
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    1500,
                    "Machine learning dev",
                    1500,
                    "Graphics designer",
                    1500,
                    "",
                    1500,
                    "3D Artist",
                    1500,
                    "Fullstack dev",
                    1500,
                    "Crypto expert",
                    1500,
                  ]}
                  speed={[50]}
                  className="text-primary  dark:text-primaryDark"
                  cursor={true}
                  wrapper="span"
                  repeat={Infinity}
                  style={{ display: "inline-block" }}
                />
              </div>

              <p className=" font-medium">
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 3 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients visions to life.
              </p>
              <p className="font-medium ">
                Whether Im working on a website,Software app, or other digital
                product, I bring my commitment to Work for excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light p-8 dark:bg-dark dark:border-light col-span-8 md:col-span-4 xl:col-span-3  order-1  md:order-2"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={"/images/profile/sean3.jpg"}
                alt="profile"
                width={500}
                height={500}
                className="w-full h-auto rounded-xl"
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"
              />
            </div>
            <div className="col-span-8 flex flex-row items-center justify-between xl:col-span-2 xl:flex-col order-3">
              <div className="flex items-end flex-col justify-center xl:items-center">
                <span className="inline-block  font-bold text-5xl md:text-6xl lg:text-7xl">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="text-base md:text-lg lg:text-center font-medium capitalize text-dark/75 dark:text-light/75">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex items-end xl:items-center flex-col justify-center">
                <span className="inline-block  font-bold text-5xl md:text-6xl lg:text-7xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-base md:text-lg lg:text-center font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects completed
                </h2>
              </div>
              <div className="flex items-end xl:items-center flex-col justify-center">
                <span className="inline-block font-bold text-5xl md:text-6xl lg:text-7xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-base md:text-lg lg:text-center font-medium capitalize text-dark/75 dark:text-light/75">
                  Years of experiance
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Exprerience />
          <Education />
          <HireMe />
        </Layout>
      </main>
    </>
  );
};

export default about;
