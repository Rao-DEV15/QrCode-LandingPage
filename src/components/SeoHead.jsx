// src/components/SeoHead.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SeoHead = ({
  title = "QrQuick – Free Custom QR Code Generator",
  description = "Create free custom QR codes instantly with QrQuick. Add colors, logos, and styles for links, Wi-Fi, contacts, emails, and more.",
  url = "https://qrquickk.vercel.app/", // Placeholder until domain is ready
  image = "./Favicon.png", // Placeholder image
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph (for Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SeoHead;
