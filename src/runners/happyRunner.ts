import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

export class HappyRunner extends StepRunner {
  message = "I'm happy! Are you happy?";
  async run(
    _vi: unknown,
    _stepName: string,
    _step: unknown
  ): Promise<{ success: boolean }> {
    console.log(`I'm happy! Are you happy?`);
    return { success: true };
  }
}
