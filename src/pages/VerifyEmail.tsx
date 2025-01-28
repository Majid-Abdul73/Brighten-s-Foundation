// src/pages/VerifyEmail.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const VerifyEmail = () => {
  const { user, isEmailVerified, sendVerificationEmail } = useAuth();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (isEmailVerified) {
      navigate('/blog-admin');
    }
  }, [user, isEmailVerified, navigate]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [countdown]);

  const handleResendVerification = async () => {
    try {
      await sendVerificationEmail();
      setMessage('Verification email sent! Please check your inbox.');
      setResendDisabled(true);
      setCountdown(60);
    } catch (err) {
      setError('Error sending verification email. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
          Verify Your Email
        </h1>
        
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          {message && (
            <div className="mb-4 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
              {message}
            </div>
          )}
          
          {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
              {error}
            </div>
          )}

          <div className="text-center space-y-4">
            <p className="text-gray-300">
              We've sent a verification email to:
              <br />
              <span className="font-medium text-white">{user?.email}</span>
            </p>
            
            <p className="text-gray-400 text-sm">
              Please check your email and click the verification link to continue.
            </p>

            <button
              onClick={handleResendVerification}
              disabled={resendDisabled}
              className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50"
            >
              {resendDisabled 
                ? `Resend in ${countdown}s` 
                : 'Resend Verification Email'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;