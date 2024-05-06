"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="scroll-smooth snap-always snap-center w-full flex flex-col md:justify-start justify-center pt-24 md:pt-36 pb-28 items-center h-screen lg:h-fit relative">
      <motion.div
        initial={{
          scale: 0,
        }}
        transition={{ duration: 0.5, ease: "circIn" }}
        animate={{ scale: 1 }}
        className="background-hero bg-[#EADBC8] w-full absolute h-full top-0 z-[-10]"
      ></motion.div>
      <div className="flex flex-col overflow-hidden justify-center items-center w-[90%] lg:w-[82%] text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [1,0.4,1],
            transition: {
              delay: 0.5,
              duration: 0.6,
              ease: "easeIn",
            },
          }}
          whileHover={{
            translateY: -5,
            transition: { duration: 0.1 },
          }}
          className="greeting-hero text-5xl ssm:text-6xl hover:translate-y-[-5px] text-[#102C57] translate-y-0 sm:text-7xl md:text-8xl font-semibold mb-6 sm:mb-8 w-fit transition-all"
        >
          HALO!
        </motion.h1>
        <motion.h3
          whileHover={{
            translateY: -5,
            transition: { duration: 0.1, ease: "easeInOut" },
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeInOut",
              delay: 1.1,
              duration: 0.6,
            },
          }}
          className="quote-hero text-xl  xs:text-2xl hover:translate-y-[-5px] translate-y-0 text-[#102C57] sm:text-3xl md:text-4xl xl:text-5xl font-medium italic mb-8 md:mb-12 lg:mb-14 xl:mb-16 w-fit cursor-default transition-all"
        >
          In Hurry for Building Dicipline Character?
        </motion.h3>
        <div className="grid grid-cols-3 w-fit mb-4 sm:gap-x-6 gap-x-4 md:gap-x-8 lg:gap-x-10 italic text-[#A5AFC0]">
          <motion.div
            initial={{
              y: -1000,
              rotate: -45,
              transformOrigin: "left bottom"
            }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeIn" }}
            animate={{ y: 0, rotate:[-45,0] }}
            className="group origin-bottom-left"
          >
            <Link
              href={"/login"}
              className="group-hover:-rotate-[15deg] rounded-md font-medium flex flex-col origin-bottom-left w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              Try
            </Link>
          </motion.div>
          <motion.div
            initial={{
              y: -2000,
            }}
            transition={{ delay: 1.9, duration: 0.8, ease: "easeIn" }}
            animate={{ y: 0 }}
            id="box2-hero"
            className="group"
          >
            <Link
              href={"/login"}
              className="group-hover:-translate-y-10 rounded-md font-medium flex flex-col origin-bottom-left w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              Our
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: 2000,
              rotate: 45,
              transformOrigin: "right bottom"
            }}
            transition={{ delay: 2.3, duration: 0.8, ease: "easeIn" }}
            animate={{ x: 0, rotate:[45,0] }}
            id="box3-hero"
            className="group"
          >
            <Link
              href={"/login"}
              className="group-hover:rotate-[15deg] rounded-md font-medium flex flex-col origin-bottom-right w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] ssm:w-[150px] ssm:h-[150px] group-hover:text-opacity-100 text-opacity-50 text-[#DAC0A3] sm:w-[170px] sm:h-[170px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] bg-[#FEFAF6] shadow-md border-none select-none justify-center items-center text-xl xs:text-3xl ssm:text-4xl md:text-5xl transition-all"
            >
              App
            </Link>
          </motion.div>
        </div>
        <p className="text-[12px] text-[#EADBC8] md:text-lg lg:text-xl opacity-90">
          Click to go to sign in page
        </p>
      </div>
    </div>
  );
}
