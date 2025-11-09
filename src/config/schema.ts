// Add service discovery fields
import { z } from 'zod';

export const configSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.number().optional(),
  API_KEY: z.string(),
  SERVICE_DISCOVERY_URL: z.string().optional(),
  SERVICE_NAME: z.string().optional()
});