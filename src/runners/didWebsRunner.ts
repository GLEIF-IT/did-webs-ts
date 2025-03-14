import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

import { constructDidWebs } from '../constructDidWebs.js';

export class DidWebsRunner extends StepRunner {
  async run(
    stepName: string,
    step: { domain: string; aid: string },
    _configJson: unknown
  ): Promise<{ success: boolean }> {
    console.log('Running step:', stepName);
    const didWebs = constructDidWebs(step.domain, step.aid);
    console.log(didWebs);

    return { success: true };
  }
}
