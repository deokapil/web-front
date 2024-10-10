"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

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
const Hero2 = () => {
  return (
    <section className="pt-8 md:pt-5 pb-10">
      <div className="container">
        <div className="md:flex items-center justify-center">
          <div className="mx-auto max-w-[780px] text-center py-32">
            <motion.div
              initial="initial"
              animate="animate"
              variants={textVariants}
            >
              <motion.h2
                variants={textVariants}
                className="text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2] mb-8 tracking-tighter bg-gradient-to-b from-white to-[#00E1E2] text-transparent bg-clip-text mt-6 "
              >
                Welcome to <br />
                Sabhiv Enterprises Pvt. Ltd. (SEPL)
              </motion.h2>
              <motion.h1
                variants={textVariants}
                className="text-3xl text-[#E1ED3E] font-bold mt-6 tracking-tight"
              >
                Delivering Strategic Consulting <br />
                for Tomorrow’s Leaders
              </motion.h1>
              <motion.div
                variants={textVariants}
                className="flex gap-1 items-center mt-8"
              >
                <motion.div variants={textVariants} className="mr-4">
                  <Button variant="ghost">See the Latest Works </Button>
                </motion.div>
                <motion.div variants={textVariants} className="mr-2">
                  <Button variant="outline"> Contact Us </Button>
                </motion.div>
              </motion.div>
              <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="/scroll.png"
                alt=""
                className="my-4 text-black"
              />
              <motion.p className="text-lg"></motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
