import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

import { DidWebsRunner } from './didWebsRunner.js';

describe('makeDidWebs', () => {
  const runner = new DidWebsRunner();
  it('should exist', () => {
    expect(typeof DidWebsRunner).toBe('function');
  });
  it('should be a StepRunner', () => {
    expect(runner instanceof StepRunner).toBe(true);
  });
  it('should have a run method', () => {
    expect(typeof runner.run).toBe('function');
  });
  it('should return a successful result', async () => {
    const result = await runner.run(
      'testStep',
      {
        domain: 'futureforg.ing',
        aid: 'EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2',
      },
      {}
    );
    expect(result.success).toBe(true);
  });
});
