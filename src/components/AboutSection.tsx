
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  // Using Intersection Observer for scroll animations
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const stats = [
    { value: 150, label: 'Projects Completed', delay: 'animation-delay-100' },
    { value: 98, label: 'Happy Clients', delay: 'animation-delay-300' },
    { value: 15, label: 'Team Members', delay: 'animation-delay-500' }
  ];

  // Animated counters for statistics
  const StatCounter = ({ end, label, delay }: { end: number; label: string; delay: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLDivElement>(null);
    const countingRef = useRef<boolean>(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !countingRef.current) {
            countingRef.current = true;
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              setCount(Math.floor(start));
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              }
            }, 16);
          }
        },
        { threshold: 0.5 }
      );
      
      if (nodeRef.current) {
        observer.observe(nodeRef.current);
      }
      
      return () => {
        if (nodeRef.current) {
          observer.unobserve(nodeRef.current);
        }
      };
    }, [end]);

    return (
      <div className={`stats-item ${delay}`} ref={nodeRef}>
        <div className="text-4xl font-bold text-brand-beige">{count}+</div>
        <div className="text-gray-600">{label}</div>
      </div>
    );
  };

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-brand-brown ${inView ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            About Digital For You
          </h2>
          <div className={`w-20 h-1 bg-brand-beige mx-auto mb-8 ${inView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'}`}></div>
          <p className={`text-lg text-gray-700 ${inView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            Digital For You is a full-service marketing agency that specializes in creating impactful digital experiences 
            for businesses of all sizes. Our team of creative professionals is dedicated to bringing your vision to life 
            through innovative design, strategic marketing, and cutting-edge development solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`${inView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Digital For You, our mission is to help businesses thrive in the digital landscape by providing 
              innovative, effective, and tailored solutions that drive growth and deliver measurable results.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-700">
              We envision a world where businesses of all sizes can harness the power of digital marketing and technology 
              to reach their full potential. We strive to be at the forefront of digital innovation, setting new standards 
              for creativity, efficiency, and client satisfaction.
            </p>
          </div>
          
          <div className={`bg-brand-beige/20 rounded-lg p-8 shadow-lg ${inView ? 'opacity-100 animate-scale-in animation-delay-400' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Our Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <StatCounter 
                  key={index} 
                  end={stat.value} 
                  label={stat.label}
                  delay={stat.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
