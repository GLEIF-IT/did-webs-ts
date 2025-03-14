import { runWorkflow } from './runWorkflow.js';

describe('runWorkflow', () => {
  it('should exist', () => {
    expect(typeof runWorkflow).toBe('function');
  });
  it('should return true', async () => {
    const workflowRunResult = await runWorkflow();
    expect(workflowRunResult).toBe(true);
  });
});
