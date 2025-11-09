// Fix edge case from monitoring feedback
export const handleEdgeCase = (config: any) => {
  // Handle case where DB_PORT is string instead of number
  if (typeof config.DB_PORT === 'string') {
    config.DB_PORT = parseInt(config.DB_PORT, 10);
  }
  return config;
};