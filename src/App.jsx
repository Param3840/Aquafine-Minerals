import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Billboard from "./components/Billboard";
import Collection from "./components/Collection";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ Billboard Section */}
      <Billboard />

      {/* ✅ Our Collection Section */}
      <Collection />
      <Price />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
