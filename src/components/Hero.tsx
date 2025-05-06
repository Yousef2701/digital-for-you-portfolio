
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const taglines = ["Marketing Agency", "Design Studio", "Development Team"];
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  // Animation to fade in the hero section
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Typewriter effect for taglines
  useEffect(() => {
    const tagline = taglines[currentTagline];
    
    if (isTyping) {
      if (displayText.length < tagline.length) {
        const timeout = setTimeout(() => {
          setDisplayText(tagline.substring(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(tagline.substring(0, displayText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentTagline((currentTagline + 1) % taglines.length);
      }
    }
  }, [currentTagline, displayText, isTyping]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cool-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30">
          {/* Abstract gradient shapes */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-brand-beige/30 blur-3xl floating"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-brown/20 blur-3xl floating animation-delay-200"></div>
          <div className="absolute top-1/4 right-1/3 w-40 h-40 rounded-full bg-blue-200/30 blur-2xl pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-blue-100/30 blur-2xl pulse-slow animation-delay-300"></div>
        </div>
      </div>
      
      <div className="container px-4 pt-32 pb-20 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-brown">
            Digital For You
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-gray-800 h-12">
            Your <span className="text-brand-beige">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 animation-delay-200 opacity-0 animate-fade-in">
            We transform ideas into digital reality with creative design, strategic marketing, and powerful development solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animation-delay-300 opacity-0 animate-fade-in">
            <Button asChild size="lg" className="bg-brand-brown text-white hover:bg-brand-brown/90 px-8 hover:scale-105 transition-transform duration-300">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-8 hover:scale-105 transition-transform duration-300">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animation-delay-500 opacity-0 animate-fade-in">
        <div 
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
