import { EventSchema } from '../core/Event.js';

const isValidEvent = (obj: unknown): boolean =>
  EventSchema.safeParse(obj).success;

const extractNextJsonBlock = (
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

const getJsonBlocks = (str: string, startIndex = 0): string[] => {
  const blockInfo = extractNextJsonBlock(str, startIndex);
  return !blockInfo
    ? []
    : [blockInfo.block, ...getJsonBlocks(str, blockInfo.nextIndex)];
};

export const parseKeyEventStream = (cesr: string): object[] =>
  getJsonBlocks(cesr)
    .map((block) => {
      try {
        return JSON.parse(block);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    })
    .filter((obj): obj is object => obj !== null && isValidEvent(obj));
