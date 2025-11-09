// Test with large datasets
describe('Pipeline Regression Tests', () => {
  it('should handle large datasets without memory leak', async () => {
    const largeDataset = Array(100000).fill({ data: 'test' });
    // Test implementation
  });

  // Verify memory usage stays within limits
  it('should maintain memory usage within limits', () => {
    const initialMemory = process.memoryUsage().heapUsed;
    // Run processing
    const finalMemory = process.memoryUsage().heapUsed;
    expect(finalMemory - initialMemory).toBeLessThan(100 * 1024 * 1024);
  });
});