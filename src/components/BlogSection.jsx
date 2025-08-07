import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How QR Codes Are Changing the Business Game",
    date: "August 5, 2025",
    excerpt: "Discover how modern businesses are using QR codes to boost engagement and simplify payments.",
    image: "/1.jpg",
    link: "#",
  },
  {
    title: "Top 5 Use Cases for Dynamic QR Codes",
    date: "July 28, 2025",
    excerpt: "From payments to promotions, explore the real-world power of smart QR code solutions.",
    image: "/2.jpg",
    link: "#",
  },
  {
    title: "Why Every Influencer Needs a Link-in-Bio QR Code",
    date: "July 20, 2025",
    excerpt: "Learn how creators are connecting all their content through a single scan.",
    image: "/3.jpeg",
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const BlogSection = () => {
  return (
    <section className="py-24 px-6 sm:px-10 bg-white" id="blog">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          From Our Blog
        </motion.h2>

        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore insights, tips, and updates on how QR codes are shaping the future of connectivity.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              className={`bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${
                i === 2 ? "sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:mx-0" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={i}
              variants={fadeUp}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
