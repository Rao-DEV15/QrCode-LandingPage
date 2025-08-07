import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">QRConnect</h2>
          <p className="text-sm leading-relaxed">
            Simplifying connectivity with cutting-edge QR code solutions for your business.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for updates.</p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} QRConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
