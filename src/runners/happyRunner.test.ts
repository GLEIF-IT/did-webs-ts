import { jest } from '@jest/globals';
import { StepRunner } from '@gleif-it/vlei-verifier-workflows';
import { HappyRunner } from './happyRunner.js';

describe('happyRunner', () => {
  const myHappyRunner = new HappyRunner();
  it('should exist', () => {
    expect(typeof HappyRunner).toBe('function');
  });
  it('should be a StepRunner', () => {
    expect(myHappyRunner instanceof StepRunner).toBe(true);
  });
  it('should have a run method', () => {
    expect(typeof myHappyRunner.run).toBe('function');
  });
  it('should return a successful result', async () => {
    const result = await myHappyRunner.run(
      'testStep',
      { yourName: 'Alice' },
      {}
    );
    expect(result.success).toBe(true);
  });
  it('should log the expected message to the console', async () => {
    // Mock console.log using Jest with an empty function
    const logMock = jest.spyOn(console, 'log').mockImplementation(jest.fn());

    // Run the function
    await myHappyRunner.run('testStep', { yourName: 'Alice' }, {});

    // Check if console.log was called with expected message
    expect(logMock).toHaveBeenCalledTimes(2);
    expect(logMock).toHaveBeenCalledWith("Alice, I'm happy! Are you happy?");

    // Restore the original console.log
    logMock.mockRestore();
  });
});
