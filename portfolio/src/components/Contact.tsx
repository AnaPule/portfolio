// src/sections/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Smartphone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      action: 'mailto:your.email@example.com',
      gradient: 'from-[#F4007A] to-[#FF40A6]'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1234567890',
      action: 'https://wa.me/1234567890',
      gradient: 'from-[#335B9D] to-[#FF40A6]'
    },
    {
      icon: Smartphone,
      title: 'SMS',
      value: '+1234567890',
      action: 'sms:+1234567890',
      gradient: 'from-[#FF0000] to-[#F4007A]'
    }
  ];

  return (
    <section id="contact" className="snap-start min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#F4007A] to-[#FF40A6] rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#335B9D] to-[#FF0000] rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#FF40A6] to-[#335B9D] rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF40A6] via-[#F4007A] to-[#335B9D] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-[#8F8F8F] text-lg">Let's discuss your next project</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#F0F0F0]">Contact Methods</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.action}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative block"
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  
                  {/* Main Card */}
                  <div 
                    className="relative flex items-center p-6 rounded-2xl border border-transparent backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(145deg, rgba(59, 10, 14, 0.8), rgba(10, 10, 10, 0.9))',
                    }}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon size={24} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F0F0F0] group-hover:text-[#FF40A6] transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-[#8F8F8F] group-hover:text-[#F0F0F0] transition-colors">
                        {method.value}
                      </p>
                    </div>
                    
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="group relative"
          >
            {/* Form Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4007A] via-[#FF40A6] to-[#335B9D] rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            
            {/* Main Form */}
            <div 
              className="relative rounded-2xl p-8 border border-transparent backdrop-blur-xl"
              style={{
                background: 'linear-gradient(145deg, rgba(59, 10, 14, 0.8), rgba(10, 10, 10, 0.9))',
              }}
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#8F8F8F] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#3B0A0E] rounded-lg focus:ring-2 focus:ring-[#FF40A6] focus:border-transparent text-[#F0F0F0] placeholder-[#8F8F8F] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8F8F8F] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#3B0A0E] rounded-lg focus:ring-2 focus:ring-[#FF40A6] focus:border-transparent text-[#F0F0F0] placeholder-[#8F8F8F] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#8F8F8F] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#3B0A0E] rounded-lg focus:ring-2 focus:ring-[#FF40A6] focus:border-transparent text-[#F0F0F0] placeholder-[#8F8F8F] transition-all"
                    placeholder="+1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#8F8F8F] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#3B0A0E] rounded-lg focus:ring-2 focus:ring-[#FF40A6] focus:border-transparent text-[#F0F0F0] placeholder-[#8F8F8F] transition-all"
                    placeholder="Project discussion"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#8F8F8F] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#3B0A0E] rounded-lg focus:ring-2 focus:ring-[#FF40A6] focus:border-transparent text-[#F0F0F0] placeholder-[#8F8F8F] resize-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F4007A] to-[#FF40A6] text-[#0A0A0A] py-4 rounded-lg font-bold hover:from-[#FF40A6] hover:to-[#335B9D] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn"
              >
                <Send size={20} className="group-hover/btn:scale-110 transition-transform" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;