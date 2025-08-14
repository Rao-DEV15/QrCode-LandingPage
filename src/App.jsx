import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductSection";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import QRBackground from "./components/QRBackground";
import Qrquick from "./components/qrtool/Qrquick";
import InsightsSection from "./components/InsightsSection";

const App = () => {
  return (
    <div className="overflow-x-hidden w-full relative scroll-smooth">
      {/* Default SEO meta */}
      <Helmet>
        <title>QrCode Quick – Free Custom QR Code Generator</title>
        <meta
          name="description"
          content="Create free QR codes instantly with QrCode Quick. Add colors, logos, and custom designs for links, Wi-Fi, contact info, payments, and more."
        />
        <meta
          name="keywords"
          content="QR code generator, free QR code, custom QR code, scan code, QR payments, QR menu"
        />
      </Helmet>

      <Hero />
      <Qrquick />
      <QRBackground />
      <Navbar />
      <ProductsSection />
      <Solutions />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default App;
