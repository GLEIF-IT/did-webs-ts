import { Aid, createAid } from '../../core/Aid.js';
import { Event } from '../../core/Event.js';

import { getKeyState } from './getKeyState.js';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';
import { sortKeyEventStream } from './sortKeyEventStream.js';

export const getController = (parsed: Event[]): IdentifierAndKeyState => {
  const controllerEvent = parsed[0];

  if (controllerEvent.t !== 'icp') {
    throw new Error("Starting event is not an 'icp' event");
  }
  // AID is the 'i' field of the 'icp' event
  const controllerAID = createAid(controllerEvent.i);

  // now look up the key state of the controller AID
  const keyState = getKeyState(
    controllerAID as Aid,
    sortKeyEventStream(parsed)
  );
  // check if the key state is null
  if (keyState === null) {
    throw new Error(`Key state for ${controllerAID} not found`);
  }
  // return the key state as an IdentifierAndKeyState
  return keyState as IdentifierAndKeyState;
};
