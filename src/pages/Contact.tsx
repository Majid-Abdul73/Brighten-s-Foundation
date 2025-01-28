import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-rose-500" />,
      title: 'Phone',
      details: '+233 24 123 4567',
      link: 'tel:+233241234567',
    },
    {
      icon: <Mail className="w-6 h-6 text-rose-500" />,
      title: 'Email',
      details: 'info@brightensfoundation.org',
      link: 'mailto:info@brightensfoundation.org',
    },
    {
      icon: <MapPin className="w-6 h-6 text-rose-500" />,
      title: 'Location',
      details: 'Nzema Aiyinasi, Western Region, Ghana',
      link: 'https://goo.gl/maps/your-location',
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: 'Office Hours',
      details: 'Monday - Friday: 9:00 AM - 5:00 PM',
      link: null,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormStatus('sent');
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormStatus('idle');
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have questions about our programs or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold ml-3 text-white">{item.title}</h3>
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-gray-400">{item.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
            <p className="text-xl text-gray-400">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                required
                rows={6}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500 resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-md font-semibold hover:bg-rose-700 transition-colors border border-rose-500 shadow-lg shadow-rose-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 bg-gray-900 border-t border-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5742046455447!2d-2.5934668!3d4.8983334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTMnNTQuMCJOIDLCsDM1JzM2LjUiVw!5e0!3m2!1sen!2sgh!4v1625764428486!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale contrast-125"
        />
      </div>
    </div>
  );
};

export default Contact;