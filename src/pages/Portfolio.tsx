
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
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
