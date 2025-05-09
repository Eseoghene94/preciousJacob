import React, { useState, useEffect, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    if (infoRef.current) {
      observer.observe(infoRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    // For demo purposes, we'll just set the submitted state to true
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div 
            ref={formRef}
            className="w-full md:w-3/5 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
          >
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for your message. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-teal-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-teal-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-teal-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-teal-500 text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          
          <div 
            ref={infoRef}
            className="w-full md:w-2/5 opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-300"
          >
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h4>
                    <a href="mailto:precious@example.com" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-teal-400 transition-colors">
                      precious@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full text-teal-600 dark:text-teal-400">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-teal-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg text-white">
                <h4 className="text-lg font-semibold mb-2">Availability</h4>
                <p>
                  Currently available for freelance projects, contract work, and full-time opportunities. Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;