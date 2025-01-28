import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Activity, CreditCard } from 'lucide-react';
import { useState } from 'react';

const Donate = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  // const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const impactStats = [
    {
      icon: <Users className="w-8 h-8 text-rose-600" />,
      number: '10+',
      label: 'People Reached',
    },
    {
      icon: <Activity className="w-8 h-8 text-rose-600" />,
      number: '2+',
      label: 'Health Screenings',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" />,
      number: '5+',
      label: 'Workshops Conducted',
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-600" />,
      number: '7+',
      label: 'Communities Served',
    },
  ];

  const donationOptions = [
    {
      amount: 50,
      description: 'Provides health screening for 5 individuals',
    },
    {
      amount: 100,
      description: 'Supports a health education workshop',
    },
    {
      amount: 250,
      description: 'Funds medical supplies for outreach programs',
    },
    {
      amount: 500,
      description: 'Sponsors a community health campaign',
    },
  ];

  // const handleDonation = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle donation form submission
  //   setShowDonationForm(false);
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
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-300">
              Your contribution helps us continue our work in improving community health and well-being
            </p>
          </motion.div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700 shadow-xl hover:border-rose-500/50 transition-colors"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-rose-500 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Options */}
      <div className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Make a Donation</h2>
            <p className="text-xl text-gray-400">Choose how you want to make an impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {donationOptions.map((option, index) => (
              <motion.button
                key={option.amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  // setSelectedAmount(option.amount);
                  setCustomAmount('');
                  setShowDonationForm(true);
                }}
                className={`p-6 rounded-lg border text-left transition-colors ₵{
                  selectedAmount === option.amount
                    ? 'bg-gray-700 border-rose-500'
                    : 'bg-gray-900 border-gray-700 hover:border-rose-500/50'
                }`}
              >
                <div className="text-2xl font-bold text-white mb-2">₵{option.amount}</div>
                <p className="text-gray-400">{option.description}</p>
              </motion.button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-1">Custom Amount</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400 sm:text-sm">₵</span>
                </div>
                <input
                  type="text"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    // setSelectedAmount(null);
                  }}
                  className="bg-gray-700 border border-gray-600 focus:ring-rose-500 focus:border-rose-500 block w-full pl-7 pr-12 sm:text-sm rounded-md text-white"
                  placeholder="0.00"
                />
              </div>
            </div>

            <button
              onClick={() => setShowDonationForm(true)}
              className="w-full bg-rose-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-rose-700 transition-colors border border-rose-500 shadow-lg shadow-rose-500/30"
            >
              Continue to Donate
            </button>
          </div>
        </div>
      </div>

      {/* Donation Form Modal */}
      {showDonationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Complete Your Donation</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowDonationForm(false);
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
                  <label className="block text-sm font-medium text-gray-300 mb-1">Card Information</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                      placeholder="Card number"
                      required
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-rose-500"
                      placeholder="CVC"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowDonationForm(false)}
                    className="px-4 py-2 text-gray-300 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Complete Donation
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

export default Donate;