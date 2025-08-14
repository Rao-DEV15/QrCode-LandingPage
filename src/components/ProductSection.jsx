import React, { useEffect } from "react";
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
  // Pure React SEO injection
  useEffect(() => {
    document.title =
      "QR Code Solutions – Digital Business Cards, Payments, Location Sharing | QrQuick";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Discover QrQuick’s range of powerful QR code tools – create business card QR codes, share all your links in one scan, accept QR payments, and guide customers to your location effortlessly.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "QR code generator, digital business card, QR payments, QR location sharing, QR link in bio, contactless payments";
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const products = [
    {
      icon: Contact2,
      title: "Business Card QR",
      description:
        "Create a digital business card QR code to share your contact details instantly with a simple scan.",
    },
    {
      icon: Link,
      title: "Link in Bio QR",
      description:
        "Perfect for creators and influencers – bundle all your social links and content into a single QR code.",
    },
    {
      icon: Wallet,
      title: "Scan to Pay",
      description:
        "Enable secure and instant QR payments for your business. Contactless, fast, and hassle-free.",
    },
    {
      icon: MapPin,
      title: "Location QR",
      description:
        "Generate a QR code that opens your exact business location on Google Maps for easy navigation.",
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-10" id="products">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Powerful QR Code Tools for Every Need
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          From digital business cards to scan-to-pay solutions, QrCode Quick
          helps you create smart, custom QR codes that connect customers with
          your brand instantly.
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
