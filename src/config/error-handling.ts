// Improve diagnostics on load failures
export class ConfigError extends Error {
  constructor(message: string, public details: any) {
    super(message);
    this.name = 'ConfigError';
  }
}

export const handleConfigError = (error: Error) => {
  console.error('Config loading failed:', error.message);
  console.error('Details:', error);
  throw error;
};