
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-brand-beige">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-brown text-center mb-8 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Get in touch with our team to discuss your project requirements or inquire about our services.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
