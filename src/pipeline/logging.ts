// Add granular logging around data processor
import logger from './logger';

export const logPipelineStage = (stage: string, data: any) => {
  logger.info(`Pipeline stage: ${stage}`, { data });
};

// Document error patterns
export const documentErrorPattern = (error: Error) => {
  logger.error('Pipeline error', { error: error.message, stack: error.stack });
};