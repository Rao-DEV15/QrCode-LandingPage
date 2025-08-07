import React from "react";
import { Contact2, Link, Wallet, MapPin } from "lucide-react";

const ProductCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500">
      <div className="text-blue-600 mb-4">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      icon: Contact2,
      title: "Business Card QR",
      description: "Share your contact details instantly with a scan.",
    },
    {
      icon: Link,
      title: "Link in Bio QR",
      description: "Perfect for creators and influencers to share all links.",
    },
    {
      icon: Wallet,
      title: "Scan to Pay",
      description: "Let customers pay instantly using QR payments.",
    },
    {
      icon: MapPin,
      title: "Location QR",
      description: "Share your exact business location via Google Maps.",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-10 bg-gray-50" id="products">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Powerful QR Code Tools for Every Need
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          From digital business cards to scan-to-pay solutions, explore the smart ways QR codes can simplify your world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
