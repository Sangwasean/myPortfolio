import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HireMe from "@/components/HireMe";
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Sean | Contact page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <section className="py-16" id="contact">
        <div className="container mx-auto px-2">
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:flex-1 justify-center items-center">
              <div>
                <h4
                  className=" text-2xl  uppercase text-primary dark:text-primaryDark mb-2 font-extrabold
                            tracking-wide "
                >
                  Get in touch
                </h4>
                <h2 className="text-[45px] uppercase dark:text-light leading-none mb-12">
                  Let&apos;s work
                  <br /> together!
                </h2>
              </div>
            </div>
            <form
              action="https://formsubmit.co/el/geleti"
              method="POST"
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-14 p-6 items-start border-2  border-dark dark:border-light"
            >
              <input
                type="text"
                className=" bg-transparent py-3 outline-none w-full placeholder:text-dark border-b dark:text-light
                        transition-all  focus:border-dark dark:placeholder:text-light"
                placeholder="Your name"
                name="name"
                required
              />
              <input
                type="email"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-dark dark:text-light
                        transition-all  focus:border-dark dark:placeholder:text-light"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-dark
                        transition-all  focus:border-dark resize-none dark:text-light dark:placeholder:text-light"
                placeholder="Your message"
              ></textarea>
              <button
                type="submit"
                className="btn border rounded-2xl p-4 bg-dark dark:bg-light text-light dark:text-dark font-bold "
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </section>
      <HireMe />
    </>
  );
};

export default ContactPage;
