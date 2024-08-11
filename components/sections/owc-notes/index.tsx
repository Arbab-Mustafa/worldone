"use client";

import Image from "next/image";
import React from "react";
import NoteCards from "./note-cards";
import { useScroll, motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/lib/utils/motion";

export const OWCNotes = () => {
  return (
    <section className="bg-notes-image-alt w-screen	flex justify-center py-12">
    <motion.div
      initial="hidden"
      id='owc-notes'

      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col gap-6 px-10 py-16 align-top max-w-7xl"
    >
      <motion.h1
        variants={textVariant(0.3)}
        className="text-center text-[32px] font-semibold md:text-5xl text-blue-600"
      >
        <span className="">OWC</span> Notes
      </motion.h1>
      <NoteCards />
    </motion.div>
    </section>
  );
};
