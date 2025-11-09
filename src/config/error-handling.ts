// Resolve recursive logging issue
export class ConfigError extends Error {
  constructor(message: string, public details: any) {
    super(message);
    this.name = 'ConfigError';
  }
}

let isHandling = false;

export const handleConfigError = (error: Error) => {
  if (isHandling) return;
  isHandling = true;
  console.error('Config loading failed:', error.message);
  isHandling = false;
  throw error;
};