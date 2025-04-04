import { Event } from '../core/Event.js';

// only handling event types with sequence numbers for now
export type SortedKeyEventStream = Map<string, Event[]>;

// Add type guard for key events
const hasAid = (event: Event): event is Event & { i: string } => {
  return 'i' in event;
};
const isSequencedEvent = (event: Event): event is Event & { s: string } => {
  return 's' in event;
};

export const sortKeyEventStream = (events: Event[]): SortedKeyEventStream => {
  const sorted: SortedKeyEventStream = new Map();
  events.forEach((event) => {
    // Only include events that have an 'i' field and a sequence number 's'
    if (!hasAid(event) || !isSequencedEvent(event)) return;
    const aid = event.i;
    if (!sorted.has(aid)) {
      sorted.set(aid, []);
    }
    const eventsForAid = sorted.get(aid);
    if (eventsForAid) {
      eventsForAid.push(event);
    }
  });

  // For each AID, sort events by sequence number ('s') in descending order (largest first)
  sorted.forEach((eventList, aid) => {
    sorted.set(
      aid,
      eventList.sort(
        (a, b) =>
          Number((b as { s: string }).s) - Number((a as { s: string }).s)
      )
    );
  });

  return sorted;
};
