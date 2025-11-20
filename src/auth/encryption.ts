// Encrypt backup codes using AES-256
import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const KEY = process.env.ENCRYPTION_KEY!;

export const encryptBackupCodes = (codes: string[]) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(KEY, 'hex'), iv);
  let encrypted = cipher.update(JSON.stringify(codes), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { encrypted, iv: iv.toString('hex') };
};

// Store encrypted codes in secrets manager
export const storeEncryptedCodes = async (userId: string, encrypted: string) => {
  // Implementation using AWS Secrets Manager or similar
};