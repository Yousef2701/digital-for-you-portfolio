
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, Laptop, MousePointer, Code, 
  Image, MessageSquare, Star
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`service-card ${delay} bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border-t-4 border-brand-beige`}
      style={{ visibility: inView ? 'visible' : 'hidden' }}
    >
      <div className="text-brand-beige mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-brand-brown">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const marketingServices = [
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that engage your audience and drive brand awareness.",
      icon: <MessageSquare size={40} />,
      delay: "animation-delay-100"
    },
    {
      title: "Branding",
      description: "Comprehensive branding solutions that establish a strong and memorable brand identity.",
      icon: <Star size={40} />,
      delay: "animation-delay-200"
    },
    {
      title: "Logo & Identity Design",
      description: "Creative logo and visual identity design that reflects your brand's personality.",
      icon: <Image size={40} />,
      delay: "animation-delay-300"
    }
  ];
  
  const developmentServices = [
    {
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces built with modern technologies.",
      icon: <MousePointer size={40} />,
      delay: "animation-delay-100"
    },
    {
      title: "Web Design & UI/UX",
      description: "User-centered design that delivers intuitive and engaging digital experiences.",
      icon: <Laptop size={40} />,
      delay: "animation-delay-200"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone size={40} />,
      delay: "animation-delay-300"
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed to meet your specific business needs.",
      icon: <Code size={40} />,
      delay: "animation-delay-400"
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gradient-soft" ref={ref}>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-brand-brown ${inView ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Our Services
          </h2>
          <div className={`w-20 h-1 bg-brand-beige mx-auto mb-8 ${inView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'}`}></div>
          <p className={`text-lg text-gray-700 ${inView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            We offer a comprehensive range of digital marketing, design, and development services 
            to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center text-brand-brown ${inView ? 'opacity-100 animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            Digital Marketing & Graphic Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center text-brand-brown ${inView ? 'opacity-100 animate-fade-in animation-delay-500' : 'opacity-0'}`}>
            Programming & Web Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
