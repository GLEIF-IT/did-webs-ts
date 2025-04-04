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

// custom print function for sorted events
export const _fancyPrintSortedEvents = (
  sorted: SortedKeyEventStream,
  depth = 0
): void => {
  const indent = (level: number): string => ' '.repeat(level * 2);

  const printObject = (obj: Event | Event[], currentDepth: number): string => {
    if (obj === null || typeof obj !== 'object') {
      return String(obj);
    }
    if (Array.isArray(obj)) {
      return (
        '[\n' +
        obj
          .map(
            (item) =>
              indent(currentDepth + 1) + printObject(item, currentDepth + 1)
          )
          .join(',\n') +
        '\n' +
        indent(currentDepth) +
        ']'
      );
    }
    const entries = Object.entries(obj);
    return (
      '{\n' +
      entries
        .map(
          ([key, value]) =>
            indent(currentDepth + 1) +
            key +
            ': ' +
            printObject(value, currentDepth + 1)
        )
        .join(',\n') +
      '\n' +
      indent(currentDepth) +
      '}'
    );
  };
  const output = Array.from(sorted.entries())
    .map(
      ([aid, events]) =>
        indent(depth) + aid + ': ' + printObject(events, depth + 1)
    )
    .join('\n');
  console.log(output);
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
