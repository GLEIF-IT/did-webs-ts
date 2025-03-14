import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

export class DidWebsRunner extends StepRunner {
  async run(
    stepName: string,
    step: { domain: string; aid: string },
    _configJson: unknown
  ): Promise<{ success: boolean }> {
    console.log('Running step:', stepName);
    const didWebs = `did:webs:${step.domain.replace(/\//g, ':')}${step.aid}`;
    console.log(didWebs);

    return { success: true };
  }
}
