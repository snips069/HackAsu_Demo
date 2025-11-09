// Extract shared utilities
export const normalizeError = (error: Error) => {
  return { message: error.message, code: error.name };
};