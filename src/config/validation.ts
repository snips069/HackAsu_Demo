// Introduce schema validation layer
import { z } from 'zod';

const configSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.number().optional(),
  API_KEY: z.string()
});

// Handle optional fields correctly
export const validateConfig = (config: any) => {
  return configSchema.parse(config);
};