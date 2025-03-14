// THIS FILE IS USED BY npm start; IT'S JUST A MECHANISM TO RUN PACKAGE INTERNALS; DOES NOT SHIP WITH THE PACKAGE
import {
  WorkflowRunner,
  getConfig,
  loadWorkflow,
} from '@gleif-it/vlei-verifier-workflows';

import { DidWebsRunner } from './src/runners/didWebsRunner.js';

export const runWorkflow = async () => {
  const workflow = loadWorkflow('src/workflows/workflow.yaml');
  const configJson = getConfig('src/configs/configuration.json');
  const runner = new WorkflowRunner(workflow, configJson);
  runner.registerRunner('did-webs', new DidWebsRunner());
  return await runner.runWorkflow();
};

runWorkflow().then((result) => {
  console.log(result);
});
