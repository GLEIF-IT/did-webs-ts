import { Aid, createAid } from '../../core/Aid.js';
import { SortedKeyEventStream } from './sortKeyEventStream.js';

import { getLatestKeyState } from './getLatestKeyState.js';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';

export const getDelegatorKeyStateForDelegate = (
  delegate: Aid,
  events: SortedKeyEventStream
): IdentifierAndKeyState | undefined => {
  // start with the event stream for the delegate
  const sortedEvents = events.get(delegate);
  if (!sortedEvents || sortedEvents.length === 0) {
    throw new Error(`No events found for identifier: ${delegate}`);
  }
  // To find the delegator, filter events to only include 'dip' events
  // There might not be one, so we return undefined
  const validEvents = sortedEvents.filter((event) => event.t === 'dip');
  if (validEvents.length === 0) return undefined;

  // Since sortedEvents are in descending order, the first valid event is the current key state
  const latestEvent = validEvents[0];
  const delegatorAid = createAid(latestEvent.di); // if it's a 'dip' event, the 'di' field will be there

  // Get the latest key state for the delegator AID
  const delegatorIdentifierAndKeyState = getLatestKeyState(
    delegatorAid,
    events
  );
  if (!delegatorIdentifierAndKeyState) {
    throw new Error(`No key state found for delegator AID: ${delegatorAid}`);
  }
  return delegatorIdentifierAndKeyState as IdentifierAndKeyState;
};
