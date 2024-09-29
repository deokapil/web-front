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

export default function Hero() {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[578px]">
            <motion.div
              initial="initial"
              animate="animate"
              variants={textVariants}
            >
              <motion.h2
                variants={textVariants}
                className="text-5xl font-bold mb-8 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6"
              >
                Welcome to Sabhiv Enterprises Pvt. Ltd. (SEPL)
              </motion.h2>
              <motion.h1
                variants={textVariants}
                className="text-3xl text-[#010D3E] font-bold mt-6 tracking-tight"
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
          <div className="mt-20 md:mt-0 md:h-[600px] md:flex-1 relative">
            <Image
              src="/hero-4.png"
              width={800}
              height={600}
              className="md:absolute md:h-[90%] md:w-auto md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
