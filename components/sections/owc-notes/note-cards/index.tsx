import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant,
} from "@/lib/utils/motion";


interface OWCNoteCardProps {
  title: string;
  desc: string;
  icon: string;
  index:number;
 
}


const OWCNotesWorlds = [
  {
    id: "world-1",
    imgUrl: "/planet-01.webp",
    icon: "/notes/fast.svg",
    title: "Fast",
    desc: "Highspeed Blockchain up to 5,000 transactions per second (TPS).",
  },
  {
    id: "world-2",
    imgUrl: "/planet-02.webp",
    icon: "/notes/efficiency.svg",
    title: "Efficiency",
    desc: "Complete multiple tasks on one platform with easy user-friendly navigation.",
  },
  {
    id: "world-3",
    imgUrl: "/planet-03.webp",
    icon: "/notes/sec.svg",
    title: "Security",
    desc: "Secured on the Ethereum Network with multiple top security audits.",
  },
  {
    id: "world-4",
    imgUrl: "/planet-04.webp",
    icon: "/notes/transp.svg",
    title: "Transparency",
    desc: "One World Chain is an open platform, which is accessible to everyone.",
  },
  {
    id: "world-5",
    imgUrl: "/planet-05.webp",
    icon: "/notes/scal.svg",
    title: "Scalability",
    desc: "Scalable up to 100K transactions per second (TPS) if/when needed.",
  },
  {
    id: "world-6",
    imgUrl: "/planet-06.webp",
    icon: "/notes/aff.svg",
    title: "Affordability",
    desc: "You get to use the best of Ethereum blockchain network at a very low cost.",
  },
];

const OWCNoteCard: React.FC<OWCNoteCardProps> = ({ icon, title, desc, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.05, 0.6)}
    className="flex flex-col items-center rounded-[14px] border border-[#1D1D2114] bg-[#eee] px-[30px] py-[60px] transition-all  ease-in-out hover:bg-white hover:shadow-[9px_19px_38px_0px_#A5B4FC] duration-150 cursor-pointer  hover:scale-125"
  >
    <div className="mb-3">
      <img alt="icon" src={icon} className="w-12 md:w-auto" />
    </div>
    <p className="mb-3 text-2xl font-bold">{title}</p>
    <p className="text-center text-base text-[#7E8492]">{desc}</p>
  </motion.div>
);

const NoteCards = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {OWCNotesWorlds.map((note, i) => (
      <OWCNoteCard key={note.id} {...note} index={i} />
    ))}
  </div>
);

export default NoteCards;
