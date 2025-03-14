import {
  loadWorkflow,
  getConfig,
  WorkflowRunner,
} from '@gleif-it/vlei-verifier-workflows';

import { HappyRunner } from './runners/happyRunner.js';

export const runWorkflow = async () => {
  const workflow = loadWorkflow('src/workflows/workflow.yaml');
  const configJson = getConfig('src/configs/configuration.json');
  const runner = new WorkflowRunner(workflow, configJson);
  runner.registerRunner('happy_step', new HappyRunner());
  return await runner.runWorkflow();
  // return await timer(2000);
};

// const timer = async (ms: number): Promise<boolean> => {
//   await new Promise((res) => setTimeout(res, ms));
//   return true;
// };
