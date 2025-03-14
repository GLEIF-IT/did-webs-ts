import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

import { makeDidWebs } from './makeDidWebs.js';

describe('makeDidWebs', () => {
  it('should exist', () => {
    expect(typeof makeDidWebs).toBe('function');
  });
  it('should be a StepRunner', () => {
    expect(new makeDidWebs() instanceof StepRunner).toBe(true);
  });
});
