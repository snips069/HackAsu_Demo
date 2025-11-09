// Generate backup codes
export const generateBackupCodes = () => {
  const codes = [];
  for (let i = 0; i < 10; i++) {
    codes.push(Math.random().toString(36).substring(2, 10).toUpperCase());
  }
  return codes;
};

// Document recovery flow in support guide
export const getRecoveryInstructions = () => {
  return 'Use your backup codes to recover access to your account';
};