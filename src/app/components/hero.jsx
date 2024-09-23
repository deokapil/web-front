"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-320%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 25,
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-gradient-hero bg-cover bg-top bg-no-repeat h-screen-minus-100">
      <div className="h-[100%] flex flex-dir-col justify-center items-center gap-10 w-[50%]">
        <motion.div initial="initial" animate="animate" variants={textVariants}>
          <motion.h2
            variants={textVariants}
            className="text-4xl font-bold text-purple-400 mb-8"
          >
            Welcome to SEPL
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="text-5xl font-bold mb-8 text-white"
          >
            Delivering Strategic Consulting <br />
            for Tomorrow’s Leaders
          </motion.h1>
          <motion.div variants={textVariants}>
            <motion.div variants={textVariants} className="inline-block mr-4">
              <Button variants="ghost">See the Latest Works </Button>
            </motion.div>
            <motion.div variants={textVariants} className="inline-block">
              <Button variants="outline"> Contact Me </Button>
            </motion.div>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
          <motion.p className="text-lg"></motion.p>
        </motion.div>
      </div>
    </section>
  );
}
