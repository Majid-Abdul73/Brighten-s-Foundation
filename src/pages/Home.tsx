import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe, ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-rose-600" />,
      title: 'Community First',
      description: 'Prioritizing the needs of our community with inclusive activities',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-rose-600" />,
      title: 'Education',
      description: 'Promoting health literacy for long-term behavioral change',
    },
    {
      icon: <Users className="h-8 w-8 text-rose-600" />,
      title: 'Collaboration',
      description: 'Partnering with local leaders and organizations',
    },
    {
      icon: <Globe className="h-8 w-8 text-rose-600" />,
      title: 'Outreach',
      description: 'Conducting free health screenings and awareness programs',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Online Health Talk',
      date: 'Every Saturday',
      time: '7:00 PM - 9:00 PM',
      location: 'Zoom Platform',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Community Health Screening',
      date: 'Coming Soon',
      time: 'To Be Anounced',
      location: 'Nzema Aiyinasi Community Center',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Youth Health Workshop',
      date: 'Coming Soon',
      time: 'To Be Anounced',
      location: 'Local Schools',
      image: 'https://images.unsplash.com/photo-1532938911079-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ];

  const testimonials = [
    {
      quote: "The foundation's health education programs have transformed our community's understanding of preventive healthcare.",
      author: "Sarah Mensah",
      role: "Community Member",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "Thanks to Brighten's Foundation, our youth are more aware of health issues and are actively promoting wellness.",
      author: "Kwame Asante",
      role: "School Principal",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      quote: "The free health screenings have helped many people identify and address health issues early.",
      author: "Abena Osei",
      role: "Healthcare Worker",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const impactNumbers = [
    { number: '10+', label: 'Lives Impacted' },
    { number: '5+', label: 'Health Workshops' },
    { number: '2+', label: 'Health Screenings' },
    { number: '5+', label: 'Partner Organizations' }
  ];

  const latestNews = [
    {
      title: 'New Mobile Clinic Launch',
      date: 'January 15, 2025',
      description: 'Bringing healthcare services directly to remote communities',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Youth Health Ambassador Program Success',
      date: 'January 10, 2025',
      description: 'Training the next generation of health advocates',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const [email, setEmail] = useState('');
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle volunteer form submission
    setShowVolunteerForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600"
            >
              Empowering Health in Nzema Aiyinasi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Promoting healthy lifestyles and preventing diseases through education and community action
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-x-4"
            >
              <Link
                to="/programs"
                className="bg-rose-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-700 transition-colors inline-block border border-rose-500 shadow-lg shadow-rose-500/30"
              >
                Our Programs
              </Link>
              <Link
                to="/donate"
                className="bg-transparent text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors inline-block border border-white/30 backdrop-blur-sm"
              >
                Support Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400">
              Building a healthier community through our fundamental principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-400">Join us in our upcoming health initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2 text-rose-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-5 h-5 mr-2 text-rose-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-5 h-5 mr-2 text-rose-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-rose-400 hover:text-rose-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Community Voices</h2>
            <p className="text-xl text-gray-400">What our community members say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-rose-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Numbers Section */}
      <div className="py-20 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-400">Making a difference in our community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="text-4xl font-bold text-rose-500 mb-2">{item.number}</div>
                <div className="text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-400">Stay updated with our activities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{news.title}</h3>
                  <p className="text-gray-400">{news.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-400 mb-8">
              Subscribe to our newsletter for updates on our programs and community impact
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-rose-500"
                required
              />
              <button
                type="submit"
                className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Volunteer With Us</h2>
            <p className="text-xl text-gray-400">Join our mission to create a healthier community</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/images/brighten1.jpg"
                alt="Volunteers working"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Why Volunteer?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Heart className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Make a Difference</h4>
                    <p className="text-gray-400">Help improve healthcare access in our community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Users className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Build Connections</h4>
                    <p className="text-gray-400">Meet like-minded individuals and expand your network</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <BookOpen className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Gain Experience</h4>
                    <p className="text-gray-400">Learn new skills and get hands-on experience</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowVolunteerForm(true)}
                className="mt-8 bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors inline-flex items-center"
              >
                Become a Volunteer
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Form Modal */}
      {showVolunteerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Volunteer Application</h2>
              <button
                onClick={() => setShowVolunteerForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                  Areas of Interest *
                </label>
                <select
                  id="interests"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                >
                  <option value="">Select an area</option>
                  <option value="health-education">Health Education</option>
                  <option value="community-outreach">Community Outreach</option>
                  <option value="medical-assistance">Medical Assistance</option>
                  <option value="administrative">Administrative Support</option>
                  <option value="event-planning">Event Planning</option>
                </select>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                  Availability *
                </label>
                <select
                  id="availability"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both Weekdays and Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Tell us about any relevant experience or skills you have"
                ></textarea>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to volunteer? *
                </label>
                <textarea
                  id="motivation"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  placeholder="Share your motivation for volunteering with us"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700 transition-colors font-semibold"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-rose-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Together, we can create a healthier and stronger community. Support our mission
            or participate in our programs.
          </p>
          <div className="space-x-4">
            <Link
              to="/programs"
              className="bg-white text-rose-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Join a Program
            </Link>
            <Link
              to="/donate"
              className="bg-rose-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-800 transition-colors inline-block"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;