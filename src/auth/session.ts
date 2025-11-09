// Session storage
import { secureStorage } from './storage';

export const saveSession = (token: string) => {
  secureStorage.setItem('session_token', token);
};

// Silent token refresh
export const refreshToken = async () => {
  // Implementation
};