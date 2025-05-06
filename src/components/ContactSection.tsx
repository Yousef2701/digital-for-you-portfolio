
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-brand-beige" ref={ref}>
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-brand-brown ${inView ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
            Contact Us
          </h2>
          <div className={`w-20 h-1 bg-brand-brown mx-auto mb-8 ${inView ? 'opacity-100 animate-fade-in animation-delay-200' : 'opacity-0'}`}></div>
          <p className={`text-lg text-gray-700 ${inView ? 'opacity-100 animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            Have a project in mind or want to learn more about our services? Reach out to us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={inView ? 'opacity-100 animate-fade-in animation-delay-400' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Tell us about your project"
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-brown text-white hover:bg-brand-brown/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className={inView ? 'opacity-100 animate-fade-in animation-delay-600' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6 text-brand-brown">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 text-brand-brown mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">123 Digital Avenue,<br />Marketing City, MC 10010</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-brand-brown mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-brand-brown mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">hello@digitalforyou.com</p>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-gray-800 mb-4">Our Location</h4>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                  {/* Google Maps Embed would go here in production */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    Google Maps Embed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
