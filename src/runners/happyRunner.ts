import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

export class HappyRunner extends StepRunner {
  message = "I'm happy! Are you happy?";
  async run(
    stepName: string,
    step: { yourName: string },
    _configJson: unknown
  ): Promise<{ success: boolean }> {
    console.log(`Executing custom step: ${stepName}`);
    console.log(`${step.yourName}, I'm happy! Are you happy?`);
    return { success: true };
  }
}
