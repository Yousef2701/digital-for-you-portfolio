
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="font-bold text-2xl text-brand-beige">
            Digital For You
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-medium hover:text-brand-beige transition-colors text-gray-300`}>
            Home
          </Link>
          <Link to="/about" className={`font-medium hover:text-brand-beige transition-colors text-gray-300`}>
            About
          </Link>
          <Link to="/services" className={`font-medium hover:text-brand-beige transition-colors text-gray-300`}>
            Services
          </Link>
          <Link to="/portfolio" className={`font-medium hover:text-brand-beige transition-colors text-gray-300`}>
            Portfolio
          </Link>
          <Button asChild variant="outline" className="border-brand-beige text-brand-beige hover:bg-brand-beige hover:text-background">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-beige" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-[62px] left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden md:hidden ${
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="font-medium text-gray-300 hover:text-brand-beige"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="font-medium text-gray-300 hover:text-brand-beige"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="font-medium text-gray-300 hover:text-brand-beige"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className="font-medium text-gray-300 hover:text-brand-beige"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className="font-medium text-gray-300 hover:text-brand-beige"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
