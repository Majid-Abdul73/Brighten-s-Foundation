import { motion } from 'framer-motion';
import { Calendar, Heart, BookOpen, Users, Activity, Stethoscope, Video } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  // const [selectedProgram, setSelectedProgram] = useState('');

  const programs = [
    {
      icon: <Video className="w-8 h-8 text-rose-600" />,
      title: 'Online Health Talk',
      description: 'Interactive online sessions discussing various health topics with medical professionals',
      schedule: 'Every Saturday, 7:00 PM - 9:00 PM',
      location: 'Zoom Platform',
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-600" />,
      title: 'Health Education Workshops',
      description: 'Regular workshops on hygiene, nutrition, and disease prevention',
      schedule: 'Every Saturday, 10:00 AM - 12:00 PM',
      location: 'Community Center',
    },
    {
      icon: <Activity className="w-8 h-8 text-rose-600" />,
      title: 'Health Screenings',
      description: 'Free basic health check-ups and screenings for common conditions',
      schedule: 'First Sunday of every month',
      location: 'Mobile Clinic Locations',
    },
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      title: 'Youth Health Ambassador Program',
      description: 'Training young people to become health advocates in their communities',
      schedule: 'Quarterly intake',
      location: 'Various Schools',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      title: 'School Health Program',
      description: 'Health education and awareness sessions in local schools',
      schedule: 'During school terms',
      location: 'Partner Schools',
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-rose-600" />,
      title: 'Medical Outreach',
      description: 'Mobile medical services for underserved areas',
      schedule: 'Monthly',
      location: 'Rural Communities',
    },
  ];

  // const handleRegisterClick = (programTitle: string) => {
  //   setSelectedProgram(programTitle);
  //   setShowRegistrationForm(true);
  // };

  // const handleRegister = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   setShowRegistrationForm(false);
  //   setSelectedProgram('');
  // };

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
              Our Programs
            </h1>
            <p className="text-xl text-gray-300">
              Join our comprehensive health initiatives designed to create lasting impact in our community
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Grid */}
      <div ref={ref} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2 text-rose-500" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Stethoscope className="w-5 h-5 mr-2 text-rose-500" />
                    <span>{program.location}</span>
                  </div>
                </div>
                {/* <button
                  onClick={() => {
                    setSelectedProgram(program.title);
                    setShowRegistrationForm(true);
                  }}
                  className="mt-6 inline-flex items-center text-rose-400 hover:text-rose-300"
                >
                  Register Now
                </button> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full border border-gray-700">
            {/* <h2 className="text-2xl font-bold mb-4 text-white">Register for {selectedProgram}</h2> */}
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowRegistrationForm(false);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationForm(false)}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;