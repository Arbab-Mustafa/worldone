"use client";

import { Button } from "@/components/ui";
import {
  planetVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/lib/utils/motion";
import { motion } from "framer-motion";

export const Hero = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className=" w-screen	flex justify-center py-12">
    <motion.div
      initial="hidden"
      id='home'
      whileInView="show"
      viewport={{ once: false, amount: 0.125 }}
    >
      <div className="bg-white flex flex-col items-center gap-16 px-10 pb-12 md:flex-row  max-w-7xl ">
        <div className="flex flex-col gap-6">
          <motion.h1
            variants={textVariant(0.3)}
            className="text-[40px] font-bold leading-[48px] md:text-[64px] md:leading-[77px]"
          >
            A Decentralized EVM Compatible Ethereum{" "}
            <span className="text-[#4A49FB] "> Scaling Platform </span>
          </motion.h1>
          <motion.p
            variants={textVariant(0.6)}
            className="text-lg font-medium text-[#7E8492]"
          >
            Get the ultimate user experience with fast transactions at super-low
            gas fee. All in one Blockchain. Welcome to One World Chain.
          </motion.p>
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex gap-4"
          >
            <Button variant="solid" color="primary" size="large" onClick={()=>openInNewTab('https://mainnet.oneworldchain.org/')}>
              Mainnet
            </Button>
            <Button variant="solid" color="purple" size="large" onClick={()=>openInNewTab('https://testnet.oneworldchain.org/')}>
              Testnet
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={planetVariants("right")}
          className="w-2/3 md:w-full "
        >

          <video
            src="/owc_coin.mp4"
            controls={false}
            loop
            autoPlay
            playsInline
            muted
            className=" shadow-[inset_0_0px_4px_16px_rgba(255,255,255,1),0_0px_4px_16px_rgba(255,255,255,1)] "
          />
        </motion.div>
      </div>
    </motion.div>
    </section>
  );
};
