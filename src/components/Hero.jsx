import React from 'react';
import Price from './Price';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  return (
<section className="w-full max-w-screen-xl mx-auto px-4 py-24 sm:px-6 mt-20 lg:mt-10 min-h-[90vh] ">

      <div className="flex flex-col-reverse xl:flex-row items-center xl:justify-between gap-12 xl:gap-20">

        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="w-full max-w-xl text-center xl:text-left flex flex-col items-center xl:items-start z-10"
        >
 <h1 className="font-poppins font-bold text-3xl min-[360px]:text-4xl sm:text-5xl md:text-5xl lg:text-5xl leading-snug text-gray-900 text-center sm:text-left">
  Create unique QR <br /> codes in seconds
</h1>



          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-md">
            Build interactive digital experiences with your customers with a few clicks. Try it now!
          </p>

          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 lg:w-72 xl:w-80 px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="font-inter bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition w-full sm:w-auto text-base lg:text-lg"
            >
              Sign up
            </button>
          </form>
        </motion.div>

        {/* Right Content */}
        <div className="hidden xl:block">
          <Price />
        </div>
      </div>
    </section>
  );
};

export default Hero;
