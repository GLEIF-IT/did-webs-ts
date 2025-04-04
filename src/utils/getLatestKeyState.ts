import { Aid } from '../core/Aid.js';
import { SortedKeyEventStream } from './sortKeyEventStream.js';
import { KeyState } from './sortKeyEventStream.test.js';

export const getLatestKeyState = (
  identifier: Aid,
  events: SortedKeyEventStream
): KeyState => {
  const sortedEvents = events.get(identifier);
  if (!sortedEvents || sortedEvents.length === 0) {
    throw new Error(`No events found for identifier: ${identifier}`);
  }
  // To find latest key state, filter events to only include inception or rotation events
  const validEvents = sortedEvents.filter(
    (event) => event.t === 'icp' || event.t === 'rot'
  );
  if (validEvents.length === 0) {
    throw new Error(
      `No inception or rotation events found for identifier: ${identifier}`
    );
  }
  // Since sortedEvents are in descending order, the first valid event is the current key state
  const latestEvent = validEvents[0];
  return { kt: latestEvent.kt, k: latestEvent.k };
};
