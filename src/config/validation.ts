// Patch enum casing mismatch
import { configSchema } from './schema';

export const validateConfig = (config: any) => {
  // Normalize enum values
  if (config.ENVIRONMENT) {
    config.ENVIRONMENT = config.ENVIRONMENT.toUpperCase();
  }
  return configSchema.parse(config);
};