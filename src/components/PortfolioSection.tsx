
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  services: string[];
}

const PortfolioSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Sample portfolio projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      category: "development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80",
      description: "A custom e-commerce solution with advanced product filtering, user accounts, and secure payment processing.",
      client: "FashionHub Inc.",
      services: ["Web Development", "UI/UX Design", "E-Commerce Solutions"]
    },
    {
      id: 2,
      title: "Corporate Brand Identity",
      category: "design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80",
      description: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines.",
      client: "TechSolutions Corp",
      services: ["Branding", "Logo Design", "Visual Identity"]
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
      description: "Integrated social media campaign across multiple platforms resulting in 200% increase in engagement.",
      client: "GreenEarth Foundation",
      services: ["Social Media Marketing", "Content Creation", "Campaign Management"]
    },
    {
      id: 4,
      title: "Mobile Banking Application",
      category: "development",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80",
      description: "Secure and user-friendly mobile banking application with biometric authentication and real-time transactions.",
      client: "Global Finance Bank",
      services: ["Mobile Development", "UI/UX Design", "Secure Solutions"]
    },
    {
      id: 5,
      title: "Product Packaging Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
      description: "Eco-friendly packaging design for a premium organic food product line.",
      client: "Natura Foods",
      services: ["Packaging Design", "Sustainable Design", "Brand Application"]
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
      description: "Comprehensive digital marketing strategy that increased online conversions by 150% within 6 months.",
      client: "FitLife Gym Chain",
      services: ["Digital Strategy", "SEO Optimization", "Content Marketing"]
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  return (
    <section id="portfolio" className="py-20 bg-white" ref={ref}>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-brand-brown ${inView ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Our Portfolio
          </h2>
          <div className={`w-20 h-1 bg-brand-brown mx-auto mb-8 ${inView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'}`}></div>
          <p className={`text-lg text-gray-700 ${inView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center mb-12 ${inView ? 'opacity-100 animate-fade-in animation-delay-400' : 'opacity-0'}`}>
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all ${
              filter === 'all' 
                ? 'bg-brand-brown text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('design')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all ${
              filter === 'design' 
                ? 'bg-brand-brown text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Design
          </button>
          <button 
            onClick={() => setFilter('development')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all ${
              filter === 'development' 
                ? 'bg-brand-brown text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Development
          </button>
          <button 
            onClick={() => setFilter('marketing')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all ${
              filter === 'marketing' 
                ? 'bg-brand-brown text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Marketing
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`portfolio-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-brown bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-brand-brown">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  <div className="mt-4 mb-4">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                    <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                    <div className="mb-2">
                      <span className="font-medium text-gray-900">Client:</span> {selectedProject.client}
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Services:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.services.map((service, idx) => (
                          <span key={idx} className="bg-brand-beige text-brand-brown text-sm px-3 py-1 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
