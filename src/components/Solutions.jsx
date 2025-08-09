import React, { useEffect } from "react";
import { Briefcase, Camera, CalendarCheck, Utensils } from "lucide-react";

const solutions = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "QR Codes for Small Businesses",
    description:
      "Easily share your services, location, contact details, and customer reviews with a single QR code. Ideal for posters, brochures, packaging, and business cards.",
  },
  {
    icon: <Camera className="w-8 h-8 text-pink-500" />,
    title: "QR Codes for Creators & Influencers",
    description:
      "Link all your social profiles, videos, and online content in one QR code. Grow your audience with a unified, scannable digital identity.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-purple-600" />,
    title: "QR Codes for Events & Venues",
    description:
      "Provide instant access to event maps, schedules, tickets, and updates — no apps required. Enhance attendee experience with a scan.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-green-600" />,
    title: "QR Codes for Restaurants & Cafés",
    description:
      "Offer touchless menus, collect reviews, share WiFi details, and enable QR payments — all from one elegant, branded code.",
  },
];

const Solutions = () => {
  // Pure React SEO
  useEffect(() => {
    document.title =
      "QR Code Solutions for Businesses, Creators, Events, and Restaurants | QrCode Quick";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Explore industry-specific QR code solutions from QrCode Quick — small business QR codes, influencer link hubs, event access codes, and restaurant digital menus.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "QR code for small business, QR menu, event QR code, influencer QR code, restaurant QR payment, digital menu QR";
    document.head.appendChild(metaKeywords);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return (
    <section className="py-24 px-6 sm:px-10" id="solutions">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-up">
          Tailored QR Code Solutions for Every Industry
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up">
          Whether you're a restaurant, event organizer, small business, or
          content creator, QrCode Quick offers smart, custom QR code solutions
          that boost engagement and make access effortless.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
