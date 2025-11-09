// Guard against missing env vars
export const loadConfig = () => {
  const requiredVars = ['DB_HOST', 'DB_PORT', 'API_KEY'];
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }
  return process.env;
};