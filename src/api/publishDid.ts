import { parseKeyEventStream } from '../utils/cesr/parseKeyEventStream.js';

import { getController } from '../utils/cesr/getController.js';
import { getDelegatorForDelegate } from '../utils/cesr/getDelegatorForDelegate.js';

import { generateDid } from '../utils/generators/generateDid.js';
import { generateDocument } from '../utils/generators/generateDocument.js';

interface Config {
  host: string;
  port?: number;
  path?: string;
}

export const publishDid = (
  cesr: string,
  config: Config
): [object, string, string] => {
  const { host, port, path } = config;
  const parsed = parseKeyEventStream(cesr);
  const controller = getController(parsed);
  console.log('controller', controller);
  const controllerDid = generateDid(host, controller.identifier, path, port);
  const delegator = getDelegatorForDelegate(controller.identifier, parsed);
  console.log('delegator', delegator);
  const document =
    delegator !== undefined
      ? generateDocument(
          controllerDid,
          controller,
          // TO DO: For now identical hosting information as Controller.
          // Delegator identifier should come form 'rpy' events  --> service endpoints?
          generateDid(host, delegator.identifier, path, port),
          delegator
        )
      : generateDocument(controllerDid, controller);

  return [document, cesr, controllerDid];
};
