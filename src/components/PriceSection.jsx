import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PriceCard from './PriceCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

const plans = [
  {
    title: 'Basic',
    description: 'Unlimited usage and advanced features',
    price: '£10',
    features: ['Unlimited static codes', 'Save QR designs', 'Scan analytics'],
  },
  {
    title: 'Pro',
    description: 'For growing businesses and pro features',
    price: '£25',
    features: ['Everything in Basic', 'Dynamic codes', 'Custom branding'],
  },
  {
    title: 'Enterprise',
    description: 'Advanced tools for large teams',
    price: '£50',
    features: ['Team access', 'API support', 'White labeling'],
  },
];

const PriceSection = () => {
  const [current, setCurrent] = useState(0);
  const desktopRef = useRef(null);
  const isInView = useInView(desktopRef, { once: true, amount: 0.3 });

  return (
    <section id="pricing" className="bg-gray-50 py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Choose Your Plan
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Simple, transparent pricing built for everyone — whether you're just starting out or scaling up.
        </motion.p>

        {/* Mobile Carousel */}
        <div className="block md:hidden w-full overflow-x-hidden mb-6">
          <div className="relative w-full">
            <motion.div
              className="flex gap-4 px-6"
              animate={{
                x: `-${current * 80}%`,
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {plans.map((plan, index) => {
                const isActive = index === current;
                return (
                  <div
                    key={index}
                    className={`min-w-[80%] transition-transform duration-300 ease-in-out ${
                      isActive ? 'scale-100 z-20' : 'scale-95 opacity-70'
                    }`}
                  >
                    <PriceCard {...plan} index={index} />
                  </div>
                );
              })}
            </motion.div>

            {/* Dots */}
            <div className="mt-6 flex justify-center space-x-2">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    current === index ? 'bg-blue-600' : 'bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          ref={desktopRef}
          className="hidden md:flex justify-center flex-wrap gap-8 lg:scale-105"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} index={index} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-xl shadow transition-all duration-300"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceSection;
