import React from 'react';
import { motion } from 'framer-motion';

const HeroImages = () => {
  return (
    <>
      {/* Top-left image */}
      <div className="absolute top-[15%] left-[5%] sm:top-[20%] sm:left-[10%] z-0 pointer-events-none">
        <motion.img
          src="/TRI.png"
          alt="QR Icon"
          variants={{
            hidden: { opacity: 0, y: 50, rotate: -12 },
            visible: {
              opacity: 0.4,
              y: 0,
              rotate: -12,
              transition: { duration: 1.2, ease: 'easeOut' },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-20 sm:opacity-70 max-w-[80px]"
        />
      </div>

      {/* Bottom-left image */}
      <div className="absolute bottom-[5%] left-[2%] sm:left-[5%] z-0 pointer-events-none">
        <motion.img
          src="/TRI.png"
          alt="Duplicate"
          variants={{
            hidden: { opacity: 0, y: 50, rotate: -200 },
            visible: {
              opacity: 0.2,
              y: 0,
              rotate: -200,
              transition: { duration: 1.2, ease: 'easeOut', delay: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }}
          className="w-24 sm:w-32 md:w-48 h-auto mix-blend-screen max-w-[200px] sm:max-w-[250px]"
          style={{
            filter: 'hue-rotate(90deg) saturate(200%)',
          }}
        />
      </div>

      {/* Bottom-right image */}
      <motion.div
        className="absolute top-[25%] right-[2%] sm:right-[5%] z-0 pointer-events-none"
        variants={{
          hidden: { opacity: 0, rotate: -15 },
          visible: {
            opacity: 0.3,
            rotate: -15,
            transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        <img
          src="/TRI.png"
          alt="Right Image"
          className="w-28 sm:w-36 md:w-52 h-auto mix-blend-screen max-w-[250px] sm:max-w-[300px]"
          style={{
            filter: 'hue-rotate(310deg) saturate(140%) brightness(115%)',
          }}
        />
      </motion.div>
    </>
  );
};

export default HeroImages;