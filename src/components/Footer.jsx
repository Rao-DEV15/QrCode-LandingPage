import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>QR Quick - Simplifying Connectivity</title>
        <meta
          name="description"
          content="QR Quick offers cutting-edge QR code solutions to simplify your business connectivity."
        />
        <meta name="keywords" content="QR codes, business solutions, connectivity, QR Quick" />
      </Helmet>

      <footer
        className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8"
        aria-label="Site Footer"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 items-start">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">QR Quick</h2>
            <p className="text-sm leading-relaxed">
              Simplifying connectivity with cutting-edge QR code solutions for your business.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#products" className="hover:underline">Product</a></li>
              <li><a href="#solutions" className="hover:underline">Solution</a></li>
              <li><a href="#Tips" className="hover:underline">Tips</a></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="md:self-start">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <p id="newsletter-desc" className="text-sm mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={handleSubmit}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                required
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
                aria-describedby="newsletter-desc"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <p role="alert" className="mt-3 text-green-400 font-semibold" aria-live="polite">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} QRQuick. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
