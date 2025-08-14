import React from "react";
import { Helmet } from "react-helmet";

const insights = [
  {
    title: "Boost Business Visibility with QR Codes",
    date: "August 5, 2025",
    excerpt:
      "Discover how small businesses are using QR codes for promotions, instant contact sharing, and easy customer access.",
    tips: [
      "Use QR codes on print ads and flyers to increase reach.",
      "Link QR codes to special offers or contact info for quick engagement.",
      "Place codes at checkout counters to collect customer feedback.",
    ],
    image: "/1.jpg",
  },
  {
    title: "Creative QR Code Uses You Haven’t Tried Yet",
    date: "July 28, 2025",
    excerpt:
      "From event check-ins to digital menus, explore unique ways to use QR codes to engage your audience.",
    tips: [
      "Use QR codes for contactless event registration and attendance tracking.",
      "Integrate QR codes into menus to offer touchless dining experiences.",
      "Create scavenger hunts or interactive experiences with QR codes.",
    ],
    image: "/2.jpg",
  },
  {
    title: "Why QR Codes Are the Future of Marketing",
    date: "July 20, 2025",
    excerpt:
      "Learn why QR technology is becoming an essential part of marketing strategies worldwide.",
    tips: [
      "Combine QR codes with social media campaigns for amplified reach.",
      "Track scans to analyze customer behavior and improve marketing.",
      "Customize QR code design to align with your brand identity.",
    ],
    image: "/3.jpeg",
  },
];

const InsightsSection = () => {
  return (
    <>
      <Helmet>
        <title>QR Code Tips & Ideas | QrCode Quick – Marketing & Business Uses</title>
        <meta
          name="description"
          content="Quick tips and ideas for using QR codes in marketing, events, restaurants, and personal branding – by QrCode Quick."
        />
        <meta
          name="keywords"
          content="QR code tips, QR code ideas, marketing with QR, business QR code, QR for events, QR for restaurants"
        />
      </Helmet>

      <section className="py-24 px-6 sm:px-10" id="Tips">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-up">
            QR Code Tips & Ideas
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up">
            Get inspired with practical ways to use QR codes for growing your
            business, engaging customers, and making life easier.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-left">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {item.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsSection;
