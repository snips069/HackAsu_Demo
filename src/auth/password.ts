// Enforce complexity in UI and API
export const validatePassword = (password: string) => {
  if (password.length < 8) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
};

// Add localized validation messaging
export const getPasswordErrorMessage = (password: string) => {
  return 'Password must be at least 8 characters with uppercase, lowercase, and numbers';
};