/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutJourney from "./components/AboutJourney";
import Modalities from "./components/Modalities";
import IntrospectionTool from "./components/IntrospectionTool";
import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gold-muted/20 selection:text-violet-deep antialiased">
      {/* Premium Header */}
      <Header 
        onBookClick={() => scrollToSection("booking")} 
        onIntrospectClick={() => scrollToSection("introspection")} 
      />

      {/* Main Page Layout */}
      <main>
        {/* Immersive Hero */}
        <Hero 
          onBookClick={() => scrollToSection("booking")} 
          onIntrospectClick={() => scrollToSection("introspection")} 
        />

        {/* Our Story / Philosophy */}
        <AboutJourney />

        {/* Healing Modalities Grid */}
        <Modalities />

        {/* Interactive Introspection Tool (Gemini Connected) */}
        <IntrospectionTool />

        {/* What She Offers */}
        <Services onBookClick={() => scrollToSection("booking")} />

        {/* Customer Testimonials & Reviews */}
        <Testimonials />

        {/* Secure Multiphase Booking Form */}
        <BookingForm />

        {/* Interactive Accordion FAQs */}
        <FAQ />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}

