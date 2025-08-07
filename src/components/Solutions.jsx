import { Briefcase, Camera, CalendarCheck, Utensils } from 'lucide-react';

const solutions = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "For Small Businesses",
    description: "Share your services, location, and reviews with a single scan. Great for posters, brochures, and business cards.",
  },
  {
    icon: <Camera className="w-8 h-8 text-pink-500" />,
    title: "For Creators & Influencers",
    description: "Link all your content and socials in one QR code. Grow your audience with a smart digital identity.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-purple-600" />,
    title: "For Events & Venues",
    description: "Let attendees access maps, schedules, and tickets instantly — no app required.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-green-600" />,
    title: "For Restaurants & Cafés",
    description: "Touchless menus, reviews, WiFi access, and payment — all through one elegant code.",
  },
];

const Solutions = () => {
  return (
    <section className=" py-24 px-6 sm:px-10" id="solutions">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-up">
          Tailored QR Code Solutions for Every Industry
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up">
          From restaurants to creators, our smart QR solutions are designed to boost engagement and make access seamless.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-shadow duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
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
