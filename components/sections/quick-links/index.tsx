"use client";

import Image from "next/image";
import React, { useRef } from "react";
import QuickLinkCards from "./link-card";
import { useScroll, motion } from "framer-motion";
import { fadeIn, planetVariants, textVariant } from "@/lib/utils/motion";

export const QuickLinks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  //bg-gradient-to-b from-white to-indigo-200
  return (
    <section className="bg-notes-image bg-til w-screen	flex justify-center py-12">
    <motion.div
      initial="hidden"
      id='quick-links'

      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      ref={ref}
      className="flex flex-col gap-6 px-10 py-16 align-top max-w-7xl"
    >
      <motion.h1
        variants={textVariant(0.3)}
        className="text-center text-[32px] font-semibold md:text-5xl text-blue-400"
      >
        <span className="">Quick</span> Links
      </motion.h1>
      <div className="flex flex-col md:flex-row items-start gap-8 ">
        <motion.div
          variants={planetVariants("left")}
          className="md:sticky top-0 w-full md:w-1/2 pt-8"
        >
          <Image
            src={"/home2.png"}
            width={0}
            height={0}
            sizes="100%"
            className="!h-full !w-full object-contain"
            alt={""}
          />
        </motion.div>
        <div
          // variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex w-full md:w-1/2 flex-col gap-6"
        >
          <QuickLinkCards />
        </div>
      </div>
    </motion.div>
    </section>
  );
};
