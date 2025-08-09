import React, { useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = ({ onCreateClick }) => {
  useEffect(() => {  
     const element = document.getElementById('qrquick');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }


    
    document.title = "QrCode Quick – Create Free QR Codes in Seconds";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Build interactive digital experiences with QrCode Quick. Create custom QR codes for links, Wi-Fi, contact info, and payments in just seconds.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <section
      id="hero"
      className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 min-h-[100vh] flex flex-col items-center justify-center lg:-mt-5 lg:scale-110"
    >
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        className="w-full max-w-xl text-center flex flex-col items-center z-10"
      >
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
          Create Free QR <br /> Codes in Seconds
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-md">
          Build interactive digital experiences with your customers with just a
          few clicks — no account needed.
        </p>

       <button
  onClick={() => {
    const element = document.getElementById('qrquick');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="mt-8 bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg"
  aria-label="Create your free QR code"
>
  Create Your Free QR Code
</button>

      </motion.div>
    </section>
  );
};

export default Hero;
