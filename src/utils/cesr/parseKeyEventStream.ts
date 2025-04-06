import { EventSchema, Event } from '../../core/Event.js';

const isValidEvent = (obj: unknown): boolean =>
  EventSchema.safeParse(obj).success;

const extractNextEventBlock = (
  str: string,
  startIndex: number
): { block: string; nextIndex: number } | null => {
  const firstBrace = str.indexOf('{', startIndex);
  if (firstBrace === -1) return null;

  const traverse = (
    index: number,
    braceCount: number,
    inString: boolean,
    escape: boolean
  ): number => {
    if (index >= str.length) return index;
    const char = str[index];
    return inString
      ? escape
        ? traverse(index + 1, braceCount, inString, false)
        : char === '\\'
          ? traverse(index + 1, braceCount, inString, true)
          : char === '"'
            ? traverse(index + 1, braceCount, false, false)
            : traverse(index + 1, braceCount, inString, false)
      : char === '"'
        ? traverse(index + 1, braceCount, true, false)
        : char === '{'
          ? traverse(index + 1, braceCount + 1, inString, false)
          : char === '}'
            ? braceCount - 1 === 0
              ? index
              : traverse(index + 1, braceCount - 1, inString, false)
            : traverse(index + 1, braceCount, inString, false);
  };

  const endIndex = traverse(firstBrace, 0, false, false);
  const block = str.substring(firstBrace, endIndex + 1);
  return { block, nextIndex: endIndex + 1 };
};

const getEventBlocks = (str: string, startIndex = 0): string[] => {
  const blockInfo = extractNextEventBlock(str, startIndex);
  return !blockInfo
    ? []
    : [blockInfo.block, ...getEventBlocks(str, blockInfo.nextIndex)];
};

// custom print function for events in a list
export const _fancyPrintEvents = (events: Event[], depth = 0): void => {
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

  console.log(printObject(events, depth));
};

export const parseKeyEventStream = (cesr: string): Event[] =>
  getEventBlocks(cesr)
    .map((block) => {
      try {
        return JSON.parse(block);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    })
    .filter((event): event is Event => event !== null && isValidEvent(event));
