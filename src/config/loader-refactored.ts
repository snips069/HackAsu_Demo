// Extract loader into modular pipeline
// Restore missing cache warmup
export class ConfigLoaderPipeline {
  private steps: Array<(config: any) => any> = [];
  private cache: Map<string, any> = new Map();

  addStep(step: (config: any) => any) {
    this.steps.push(step);
    return this;
  }

  async load() {
    const cacheKey = 'config';
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    let config = {};
    for (const step of this.steps) {
      config = await step(config);
    }
    this.cache.set(cacheKey, config);
    return config;
  }
}