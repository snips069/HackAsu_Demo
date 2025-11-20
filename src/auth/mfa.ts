// Add TOTP provisioning with QR codes
import { authenticator } from 'otplib';

export const generateMFASecret = () => {
  return authenticator.generateSecret();
};

export const generateQRCode = (secret: string, email: string) => {
  return authenticator.keyuri(email, 'App', secret);
};

// Persist MFA enrollment status
export const saveMFAStatus = (userId: string, enabled: boolean) => {
  // Implementation
};