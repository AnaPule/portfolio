import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

// --- REGAL GOLD STYLING CONSTANTS (Consistent with other components) ---
const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const GOLD_HEX = '#D4AF37';
// Use the style object for the regal gold text effect
const regalGoldText = {
  background: REGAL_GOLD_GRADIENT,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 0px 3px rgba(255, 215, 0, 0.2))',
};
// ---------------------------------------------------------------------

// Mock contact links
const contactInfo = [
  { icon: Mail, label: 'Email Me', value: 'morwetsana.pule@gmail.com', href: 'mailto:morwetsana.pule@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/mmpule', href: 'https://www.linkedin.com/in/mmpule' },
  { icon: Github, label: 'GitHub', value: 'https://github.com/AnaPule', href: 'https://github.com/AnaPule' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+27 63 519 9397', href: 'https://wa.me/27635199397' }
];

// Define the form state type
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormChange = (field: keyof FormState, value: any) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // REAL EMAIL FUNCTIONALITY
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const emailSubject = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    // Open user's email client with pre-filled content
    window.location.href = `mailto:morwetsana.pule@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Optional: Reset form after a delay
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  // ALTERNATIVE: Open WhatsApp with form content
  const handleWhatsAppSubmit = () => {
    const whatsappMessage = encodeURIComponent(
      `Hello Morwetsana! 👋\n\nI saw your portfolio and would like to connect.\n\n*My Details:*\nName: ${formState.name}\nEmail: ${formState.email}\n\n*Message:*\n${formState.message}`
    );

    window.open(`https://wa.me/27635199397?text=${whatsappMessage}`, '_blank');
  };

  {/*
  // Form Input Component - FIXED TYPING
  const FormInput: React.FC<FormInputProps> = ({ label, name, type, isTextArea = false, maxLength }) => (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={formState[name]}
          onChange={handleChange}
          required
          maxLength={maxLength}
          className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37] resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formState[name]}
          onChange={handleChange}
          required
          maxLength={maxLength}
          className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37]"
        />
      )}
    </div>
  );
*/}
  return (
    <section id="contact" className="snap-start flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-widest uppercase" style={regalGoldText}>
            Contact
          </h2>
          <p className="text-gray-400 text-lg">Choose how you'd like to reach me</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-9">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white" style={{ fontFamily: 'serif' }}>Direct Channels</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start p-4 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-amber-600 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size={20} className="text-amber-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block text-sm text-left font-medium text-gray-400 group-hover:text-amber-300 transition-colors">{item.label}</span>
                    <span className="block text-white text-md">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800">
              <h3 className="text-2xl font-semibold mb-8 text-white" style={{ fontFamily: 'serif' }}>Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <section>
                  <label htmlFor='Name' className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    required
                    name='Name'
                    type='text'
                    maxLength={20}
                    value={formState.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37]"
                  />
                </section>
                <section>
                  <label htmlFor='email' className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    required
                    name='email'
                    type='email'
                    maxLength={35}
                    value={formState.email}
                    onChange={(e) => handleFormChange('email', e.target.value)} className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37]"
                  />
                </section>
              </div>

              <section className='py-8'>
                <label htmlFor='subject' className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  required
                  name='subject'
                  type='text'
                  maxLength={30}
                  value={formState.subject}
                  onChange={(e) => handleFormChange('subject', e.target.value)}
                  className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37]"
                />
              </section>

              <section className='py-4'>
                <label htmlFor='message' className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  maxLength={500}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37]"
                />
              </section>

              {/* Dual Submit Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {/* Email Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-lg font-bold rounded-xl text-black transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2"
                  style={{ background: REGAL_GOLD_GRADIENT }}
                >
                  <Mail size={20} />
                  Send Email
                </button>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-4 text-lg font-bold rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2"
                  disabled={!formState.name || !formState.message}
                >
                  <MessageCircle size={20} />
                  Send WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;