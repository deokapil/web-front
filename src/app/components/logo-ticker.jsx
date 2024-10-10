"use client";
import { clientImages } from "@/data/features";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="contianer">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {clientImages.map((image, i) => (
              <Image
                src={image}
                alt="client Logo"
                width={300}
                height={150}
                className="logo-ticker-image"
                key={i}
              />
            ))}
            {/* repeat logos for animation */}
            {clientImages.map((image, i) => (
              <Image
                src={image}
                alt="client Logo"
                width={100}
                height={50}
                className="logo-ticker-image"
                key={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
