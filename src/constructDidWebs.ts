export const constructDidWebs = (domain: string, aid: string): string => {
  return `did:webs:${domain.replace(/:/g, '%3A').replace(/\//g, ':')}:${aid}`;
};
