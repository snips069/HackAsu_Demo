// Normalize response payloads
export const normalizeResponse = (data: any) => {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString()
  };
};

// Add error enums
export enum ApiError {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  VALIDATION_ERROR = 'VALIDATION_ERROR'
}