// Handle expired refresh tokens
export const handleTokenExpiration = () => {
  // Implementation
};

// Improve error messaging for failed auth
export const getAuthErrorMessage = (error: Error) => {
  return `Authentication failed: ${error.message}`;
};