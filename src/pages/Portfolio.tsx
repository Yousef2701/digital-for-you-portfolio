
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

const Portfolio = () => {
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
            Our Portfolio
          </h1>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </div>
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
