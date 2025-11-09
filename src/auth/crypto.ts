// Swap MD5 hashing for SHA-256
import crypto from 'crypto';

export const hashPassword = (password: string, salt: string) => {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha256').toString('hex');
};

// Update password hashing cost factors
export const generateSalt = () => {
  return crypto.randomBytes(32).toString('hex');
};