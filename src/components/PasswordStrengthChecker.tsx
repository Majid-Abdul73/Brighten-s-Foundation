// src/components/PasswordStrengthChecker.tsx
import { FC } from 'react';

interface PasswordStrengthCheckerProps {
  password: string;
}

interface Requirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: Requirement[] = [
  {
    label: 'At least 8 characters',
    test: (password) => password.length >= 8,
  },
  {
    label: 'Contains uppercase letter',
    test: (password) => /[A-Z]/.test(password),
  },
  {
    label: 'Contains lowercase letter',
    test: (password) => /[a-z]/.test(password),
  },
  {
    label: 'Contains number',
    test: (password) => /\d/.test(password),
  },
  {
    label: 'Contains special character',
    test: (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
  },
];

const PasswordStrengthChecker: FC<PasswordStrengthCheckerProps> = ({ password }) => {
  return (
    <div className="mt-2 space-y-2">
      {requirements.map((req, index) => (
        <div
          key={index}
          className={`flex items-center text-sm ${
            req.test(password) ? 'text-green-400' : 'text-gray-400'
          }`}
        >
          <span className="mr-2">
            {req.test(password) ? '✓' : '○'}
          </span>
          {req.label}
        </div>
      ))}
    </div>
  );
};

export default PasswordStrengthChecker;