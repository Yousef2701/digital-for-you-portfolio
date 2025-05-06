
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-brand-beige/20">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-brown text-center mb-8 animate-fade-in">
            About Us
          </h1>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Learn more about Digital For You and our mission to help businesses succeed in the digital world.
          </p>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
