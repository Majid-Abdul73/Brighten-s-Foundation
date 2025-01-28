import { motion } from 'framer-motion';
import { Award, Heart, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: 'Brighten Arhin',
      role: 'Founder & Director',
      image: '/src/images/brighten.jpg',
      description: 'Public Health Nursing Student at University of Health and Allied Sciences',
    },
    {
      name: 'Dr. Sarah Mensah',
      role: 'Medical Director',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Experienced healthcare professional with 15+ years in community health',
    },
    {
      name: 'Kwame Owusu',
      role: 'Final year Physician Assistant Student',
      image: 'https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Dedicated to building strong community relationships and organizing health initiatives',
    },
    {
      name: 'Mary Mensah',
      role: 'Third year Public Health Nursing Student',
      image: '/src/images/brighten2.jpg',
      description: 'A dedicated student with a passion for health and well-being',
    },
    {
      name: 'Amishetu Issaka',
      role: 'Disease Control Specialist',
      image: '/src/images/brighten1.jpg',
      description: 'Experienced disease control practitioner with 10+ years of experience',
    },
    {
      name: 'Amadu Abdul Majid',
      role: 'IT & Techmical Support',
      image: '/src/images/profile.jpg',
      description: 'A dedicated professional with expertise in IT and technical support',
    },
  ];

  const visionPoints = [
    {
      title: 'Healthcare Access',
      description: 'Making quality healthcare accessible to every community member in Nzema Aiyinasi and beyond',
      icon: '🏥',
    },
    {
      title: 'Education',
      description: 'Empowering communities through health education and preventive care awareness',
      icon: '📚',
    },
    {
      title: 'Innovation',
      description: 'Leveraging technology and modern healthcare practices to improve service delivery',
      icon: '💡',
    },
    {
      title: 'Sustainability',
      description: 'Building lasting partnerships and programs that create long-term positive impact',
      icon: '🌱',
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-900 text-gray-100">
      {/* Vision Section */}
      <div className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
              Our Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To create a healthier Nzema Aiyinasi where individuals are well-informed, proactive, and empowered to prevent diseases and lead fulfilling lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-800 border-t border-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">Our Mission</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              To empower individuals and communities in Nzema Aiyinasi to adopt healthy lifestyles
              through education, awareness campaigns, and preventive healthcare services, ensuring
              sustainable health and well-being for all.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide our work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-rose-500" />,
                title: 'Compassion',
                description: 'We care deeply about the well-being of our community members',
              },
              {
                icon: <Shield className="w-12 h-12 text-rose-500" />,
                title: 'Integrity',
                description: 'We maintain high ethical standards in all our activities',
              },
              {
                icon: <Award className="w-12 h-12 text-rose-500" />,
                title: 'Excellence',
                description: 'We strive for the highest quality in our services',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors text-center"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div ref={ref} className="py-20 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-400">Meet the dedicated individuals behind our mission</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-rose-400 mb-3">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;