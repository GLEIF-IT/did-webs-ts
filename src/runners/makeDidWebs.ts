import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

export class makeDidWebs extends StepRunner {
  run(
    _stepName: string,
    _step: object,
    _configJson: unknown
  ): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true });
  }
}
