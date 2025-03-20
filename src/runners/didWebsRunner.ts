import { StepRunner } from '@gleif-it/vlei-verifier-workflows';

import { generateDidWebs } from '../generateDidWebs.js';

export class DidWebsRunner extends StepRunner {
  async run(
    stepName: string,
    step: { host: string; aid: string; path?: string; port?: number },
    _configJson: unknown
  ): Promise<{ success: boolean }> {
    console.log('Running step:', stepName);
    const didWebs = generateDidWebs(step.host, step.aid, step.path, step.port);
    console.log(didWebs);

    return { success: true };
  }
}
