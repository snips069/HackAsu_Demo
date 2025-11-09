// Implement proper resource cleanup
export class DataProcessor {
  private resources: Set<any> = new Set();

  process(data: any) {
    try {
      // Processing logic
    } finally {
      this.cleanup();
    }
  }

  private cleanup() {
    this.resources.forEach(resource => {
      if (resource && typeof resource.destroy === 'function') {
        resource.destroy();
      }
    });
    this.resources.clear();
  }
}

// Add memory monitoring
export const monitorMemory = () => {
  setInterval(() => {
    const usage = process.memoryUsage();
    if (usage.heapUsed > 500 * 1024 * 1024) {
      console.warn('High memory usage detected');
    }
  }, 60000);
};