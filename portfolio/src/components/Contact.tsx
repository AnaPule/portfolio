import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

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
  { icon: Linkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/mmpule', href: 'www.linkedin.com/in/mmpule' },
  { icon: Github, label: 'GitHub', value: 'https://github.com/AnaPule', href: '#' },
  {icon: MessageCircle, label: 'WhatsApp', value: '+27 63 519 9397', href: '#'}
];

const Contact: React.FC = () => {
  // State for form inputs (using mock state as submission logic is not implemented)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted (Mock):', formState);
    // In a real application, you would handle API submission here
    alert('Thank you for your message! (Mock Submission)');
    setFormState({ name: '', email: '', message: '' });
  };
  
  // Custom Input Component for clean styling
  const FormInput: React.FC<any> = ({ label, name, type, isTextArea = false }) => (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={formState[name as keyof typeof formState]}
          onChange={handleChange}
          required
          className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37] resize-none"
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formState[name as keyof typeof formState]}
          onChange={handleChange}
          required
          className="w-full p-4 text-white rounded-lg border border-gray-700 bg-[#0a0a0a] transition-all focus:outline-none focus:border-amber-600 focus:shadow-[0_0_0_1px_#D4AF37]"
        />
      )}
    </div>
  );

  return (
    <section 
      id="contact" 
      className="snap-start flex items-center justify-center relative overflow-hidden py-20" 
    >
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Title with Regal Gold Gradient Text */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-widest uppercase"
            style={regalGoldText}
          >
            Contact
          </h2>
          {/* Subtitle in light gray text for contrast on the dark background */}
          <p className="text-gray-400 text-lg">I'd love to hear from you. Send me a royal decree.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-9">
          
          {/* Contact Information (Left Column - 1/3) */}
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

          {/* Contact Form (Right Column - 2/3) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800">
              <h3 className="text-2xl font-semibold mb-8 text-white" style={{ fontFamily: 'serif' }}>Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <FormInput label="Your Name" name="name" type="text" />
                <FormInput label="Your Email" name="email" type="email" />
              </div>

              <div>
                <FormInput label='Subject' name='subject' type='text' maxlength={25} />
              </div>
              
              <FormInput label="Your Message" name="message" type="text" isTextArea={true} />
              
              <button
                type="submit"
                className="w-full py-4 text-lg font-bold rounded-xl text-black transition-all duration-300 uppercase tracking-wider mt-4 shadow-lg hover:shadow-amber-500/30"
                style={{ background: REGAL_GOLD_GRADIENT }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
