import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: index === 1 ? 16 : 0, // Lower middle card slightly
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: index * 0.2, // Delay based on index
    },
  }),
};



const PriceCard = ({ title, description, price, features, index }) => {
  const isMiddle = index === 1;

  return (
 <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  custom={index}
  className={`
    bg-white rounded-2xl p-6 w-56 h-[420px] transition-all duration-300 relative
${index === 1 ? 'z-20 scale-105 shadow-lg' : 'z-10 lg:-mx-6 shadow-md'}
  `}
  style={{ y: index === 1 ? 16 : 0 }} // 👈 This replaces `translate-y-4`
>

      <h2 className="text-2xl font-bold mb-2 text-left text-gray-900">{title}</h2>
      <p className="text-gray-600 mb-4 text-left text-sm">{description}</p>
      <div className="text-left mb-6">
        <p className="text-4xl font-bold text-gray-900">{price}</p>
        <p className="text-xs text-gray-500">/mo</p>
      </div>
      <button
        className={`w-full py-2 rounded-md text-white text-sm font-medium ${
          isMiddle ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-200 hover:bg-blue-300'
        }`}
      >
        Subscribe
      </button>
      <ul className="text-gray-700 list-disc pl-5 mt-6 space-y-2 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="text-left">{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PriceCard;
