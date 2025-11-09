// Extract loader into modular pipeline
export class ConfigLoaderPipeline {
  private steps: Array<(config: any) => any> = [];

  addStep(step: (config: any) => any) {
    this.steps.push(step);
    return this;
  }

  async load() {
    let config = {};
    for (const step of this.steps) {
      config = await step(config);
    }
    return config;
  }
}