import React, { useState } from "react";
import emailjs from "emailjs-com";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import { BatteryLoading } from "react-loadingg";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted

    const parameters = {
      from_name: name,
      from_email: email,
      to_name: "Sean",
      message: message,
    };

    try {
      const response = await emailjs.send(
        "service_12bgef8",
        "template_59i4tgt",
        parameters,
        "DaVHRTdzPOctnhuqH"
      );
      console.log("Message sent", response);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log("Error:", error.text);
    } finally {
      setLoading(false); // Set loading state back to false when email is sent or error occurs
    }
  };

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
                <h4 className="text-2xl  uppercase text-primary dark:text-primaryDark mb-2 font-extrabold tracking-wide">
                  Get in touch
                </h4>
                <h2 className="text-[45px] uppercase dark:text-light leading-none mb-12">
                  Let&apos;s work
                  <br /> together!
                </h2>
              </div>
            </div>
            <form
              onSubmit={sendEmail}
              className="flex-1 rounded-2xl flex flex-col gap-y-6 pb-14 p-6 items-start border-2  border-dark dark:border-light"
            >
              <input
                type="text"
                className="bg-transparent py-3 outline-none w-full placeholder:text-dark border-b dark:text-light
                        transition-all  focus:border-dark dark:placeholder:text-light"
                placeholder="Your name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-dark dark:text-light
                        transition-all  focus:border-dark dark:placeholder:text-light"
                name="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-dark
                        transition-all  focus:border-dark resize-none dark:text-light dark:placeholder:text-light"
                placeholder="Your message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="relative">
                <button
                  type="submit"
                  className="btn border rounded-2xl p-4 bg-dark dark:bg-light text-light dark:text-dark font-bold "
                >
                  Send Email
                </button>
                {loading ? (
                  <span className="relative left-8 top-0">
                    <BatteryLoading />
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <HireMe />
    </>
  );
};

export default ContactPage;
