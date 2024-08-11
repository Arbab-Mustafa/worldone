'use client'
import React from "react";
import { motion } from "framer-motion";
import { planetVariants, slideIn } from "@/lib/utils/motion";

const tokenData = {
  imgUrl: "/home3.png",
  title: "OWCT",
  details: [
    { label: "Name:", value: "One World Chain" },
    { label: "Symbol:", value: "OWCT" },
    { label: "Decimals:", value: "18" },
    { label: "Max. Supply:", value: "21,000,000" },
  ],
  links: [
    { url: "#", icon: "/images/icon17.png" },
    {
      url: "https://www.coingecko.com/en/coins/one-world-chain",
      icon: "/images/icon18.png",
    },
    { url: "#", icon: "/images/icon19.png" },
    {
      url: "https://icecreamswap.com/swap?chain=oneworldmainnet",
      icon: "/images/icon27.png",
    },
    { url: "https://gempad.app", icon: "/images/gempad.png" },
  ],
};

const TokenInfoCard = ({ data }) => (
  
  <section className="bg-gradient-to-b from-indigo-200 to-white w-screen flex justify-center py-12">
  <motion.div
    initial="hidden"
    id='owct'
    whileInView="show" // Trigger animation when in view
    viewport={{ once: false, amount: 0.25 }} // Ensure it triggers when the component is partially in view
    className="flex-col md:flex-row flex items-center gap-6  max-w-7xl w-full"
  >
    <div className="flex w-full justify-center md:w-1/2">
      <motion.div variants={planetVariants("left")} className="px-12 md:px-0">
        <img alt="image" src={data.imgUrl} className="chakra-image" />
      </motion.div>
    </div>
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="w-full md:w-1/2  px-12"
    >
      <p className="mb-6 text-[32px] font-semibold text-[#4188F8] md:text-5xl ">
        {data.title}
      </p>
      {data.details.map((detail, index) => (
        <div key={index} className="mb-4 flex flex-wrap gap-5">
          <div className="w-[100px] md:w-[125px]">
            <p className="text-base font-medium md:text-xl">{detail.label}</p>
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold md:text-2xl">{detail.value}</p>
          </div>
        </div>
      ))}
      <div className="mb-10 flex gap-8">
        {data.links.map((link, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="chakra-link"
            href={link.url}
          >
            <img alt="image" src={link.icon} className="h-[40px]" />
          </a>
        ))}
      </div>
    </motion.div>
  </motion.div>
  </section>
);

const OWCTokenInfo = () => (

    <TokenInfoCard data={tokenData} />

);

export default OWCTokenInfo;
