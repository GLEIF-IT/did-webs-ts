import { z } from 'zod';

export const BARSchema = z.object({
  v: z.string(),
  t: z.literal('bar'),
  d: z.string(),
  i: z.string(),
  dt: z.string(),
  r: z.string(),
  a: z.object({
    d: z.string(),
    i: z.string(),
    dt: z.string(),
    name: z.string(),
    role: z.string(),
  }),
});

export const DIPSchema = z.object({
  v: z.string(),
  t: z.literal('dip'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  kt: z.string(),
  k: z.array(z.string()),
  nt: z.string(),
  n: z.array(z.string()),
  bt: z.string(),
  b: z.array(z.string()),
  c: z.array(z.string()),
  a: z.array(z.string()),
  di: z.string(),
});

export const DRTSchema = z.object({
  v: z.string(),
  t: z.literal('drt'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  p: z.string(),
  kt: z.string(),
  k: z.array(z.string()),
  nt: z.string(),
  n: z.array(z.string()),
  bt: z.string(),
  br: z.array(z.string()),
  ba: z.array(z.string()),
  c: z.array(z.string()),
  a: z.array(z.string()),
});

export const EXNSchema = z.object({
  v: z.string(),
  t: z.literal('exn'),
  d: z.string(),
  i: z.string(),
  ri: z.string(),
  x: z.string(),
  p: z.string(),
  dt: z.string(),
  r: z.string(),
  q: z.object({}).passthrough(),
  a: z.object({
    msg: z.string(),
  }),
});

export const ICPSchema = z.object({
  v: z.string(),
  t: z.literal('icp'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  kt: z.string(),
  k: z.array(z.string()),
  nt: z.string(),
  n: z.array(z.string()),
  bt: z.string(),
  b: z.array(z.string()),
  c: z.array(z.string()),
  a: z.array(z.string()),
});

export const IXNSchema = z.object({
  v: z.string(),
  t: z.literal('ixn'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  p: z.string(),
  a: z.array(
    z.object({
      d: z.string(),
      i: z.string(),
      s: z.string(),
    })
  ),
});

export const PROSchema = z.object({
  v: z.string(),
  t: z.literal('pro'),
  d: z.string(),
  i: z.string(),
  dt: z.string(),
  r: z.string(),
  rr: z.string(),
  q: z.object({
    d: z.string(),
    i: z.string(),
    s: z.string(),
    ri: z.string(),
    dd: z.string(),
  }),
});

export const QRYSchema = z.object({
  v: z.string(),
  t: z.literal('qry'),
  d: z.string(),
  i: z.string(),
  dt: z.string(),
  r: z.string(),
  rr: z.string(),
  q: z.object({
    d: z.string(),
    i: z.string(),
    s: z.string(),
    dt: z.string(),
  }),
});

export const RCTSchema = z.object({
  v: z.string(),
  t: z.literal('rct'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
});

export const ROCSchema = z.object({
  v: z.string(),
  t: z.literal('roc'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  p: z.string(),
  kt: z.string(),
  k: z.array(z.string()),
  nt: z.string(),
  n: z.array(z.string()),
  bt: z.string(),
  br: z.array(z.string()),
  ba: z.array(z.string()),
  c: z.array(z.string()),
  a: z.array(z.string()),
});

export const RPYSchema = z.object({
  v: z.string(),
  t: z.literal('rpy'),
  d: z.string(),
  dt: z.string(),
  r: z.string(),
  a: z.object({
    eid: z.string(),
    scheme: z.string(),
    url: z.string(),
  }),
});

export const XIPSchema = z.object({
  v: z.string(),
  t: z.literal('xip'),
  d: z.string(),
  i: z.string(),
  ri: z.string(),
  dt: z.string(),
  r: z.string(),
  q: z.object({}).passthrough(),
  a: z.object({
    msg: z.string(),
  }),
});

export const EventSchema = z.union([
  BARSchema,
  DIPSchema,
  DRTSchema,
  EXNSchema,
  ICPSchema,
  IXNSchema,
  PROSchema,
  QRYSchema,
  RCTSchema,
  ROCSchema,
  RPYSchema,
  XIPSchema,
]);

export const isValidEvent = (obj: unknown): boolean =>
  EventSchema.safeParse(obj).success;

export const parseEvent = (obj: unknown) => EventSchema.parse(obj);

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

export const parseCesr = (cesr: string): object[] =>
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

describe('parseCesr', () => {
  it('should create a properly sorted array of objects from a raw CESR stream', () => {
    const cesr =
      '{"v":"KERI10JSON00012b_","t":"icp","d":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","i":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","s":"0","kt":"1","k":["DEx0lnNR0WmphGiX-4FYv1-2iKxKph74lqi0V3KDdLKP"],"nt":"1","n":["EA1aDFBBlSc3lZe_IQqBYr6XV8-YDYWwyLIVmtm5Lng5"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAAAl33Xb8MWQwwZFsvpROZViXa37VsFynZlyzF8NdhZOakzyivVCeyNJ_mI8D81gy2hxwpUAaVxB7O92kbrM8SYK-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-15T19c59c12d820369p00c00{"v":"KERI10JSON00012b_","t":"icp","d":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","i":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","s":"0","kt":"1","k":["DJJOg4Zh7e_UZ8k_yga9Jc064-NsT-48ihRukQI8fepu"],"nt":"1","n":["EGCPznuxQ_rn2_BmDRmrVvsPWYCqREIoaukeP5D7g478"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAACpL_o8Idf6Wliy8KraTF9ksh6EhHcDLegpAmMG_b0GGlnWjuxYeQ03fUcwFsau2T8Zotrfyc_aHpj-8T9FbQsL-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-15T19c59c09d022532p00c00{"v":"KERI10JSON00013a_","t":"ixn","d":"ECL68Dfi9APmL94VF_A04tkx5f3ZxHTuznv9KF8CRvEm","i":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","s":"1","p":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","a":[{"i":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","s":"0","d":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB"}]}-VAn-AABAACfS_z6yUi64bjRH1YeiDJY2a7tY6UQvT9X9VO1IS0kFt2RydHK2fiXzpZ1XhqrIznJnHGU_kkLL8327K7uUo4E-EAB0AAAAAAAAAAAAAAAAAAAAAAB1AAG2025-03-15T19c59c10d472734p00c00{"v":"KERI10JSON00015f_","t":"dip","d":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","i":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","s":"0","kt":"1","k":["DAk0e0uHzz6Jm5LbShlr0fius72HTwsR-DdZE4CDqtu-"],"nt":"1","n":["ED2ouykch12LtXgxKBadg7Jwez0bRYcx-pIlWarEn2Xm"],"bt":"0","b":[],"c":[],"a":[],"di":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB"}-VA5-AABAAClr8tKZhkX21dKBkuAEvZTWtra_geau2pcjp1QeygI2GkioK5_KSGAtS6X1mu2nEEDFAc0RaCo9In4mgwIZicM-GAB0AAAAAAAAAAAAAAAAAAAAAABECL68Dfi9APmL94VF_A04tkx5f3ZxHTuznv9KF8CRvEm-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-15T19c59c07d057579p00c00{"v":"KERI10JSON000106_","t":"rpy","d":"EBIyW1AIEE2KjRvzKQQXYf_frOlqmy-bwEuOIf5EM0ZL","dt":"2022-01-20T12:57:59.823350+00:00","r":"/loc/scheme","a":{"eid":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","scheme":"https","url":"https://keria-test.rootsid.cloud/"}}-VA0-FABEBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB0AAAAAAAAAAAAAAAAAAAAAAAEBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB-AABAAA2ThMDEfMa0QhNCkA6JLycqcKRYuoVJ1C_qrynhQGU_U2ArRRiNFzAPb7cQjrcvAbQ3yqk2TTVXtfvFPsfJtsB{"v":"KERI10JSON000111_","t":"rpy","d":"EDSqoaOsxYDJVqzeOjr77jNqkTpZ85us1Z9YICHTlyco","dt":"2025-03-15T19:59:13.262000+00:00","r":"/end/role/add","a":{"cid":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","role":"agent","eid":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB"}}-VA0-FABEKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB0AAAAAAAAAAAAAAAAAAAAAAAEKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB-AABAADc5SVmWL7JCAwPyvfj22S4bepE8IKL72laSmAZ_ChY36sMUBd0_bIWUZr6kh11ybxSzwftqdTd5oIYuDNFHqIE';
    const parsedCesr = [
      {
        v: 'KERI10JSON00012b_', // Version string
        t: 'icp', // Message type: Inception
        d: 'EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB', // SAID of the event
        i: 'EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB', // Identifier (AID)
        s: '0', // Sequence number (first event)
        kt: '1', // Keys signing threshold
        k: ['DEx0lnNR0WmphGiX-4FYv1-2iKxKph74lqi0V3KDdLKP'], // Signing key
        nt: '1', // Next keys signing threshold
        n: ['EA1aDFBBlSc3lZe_IQqBYr6XV8-YDYWwyLIVmtm5Lng5'], // Next signing key digest
        bt: '0', // Backer threshold (no backers)
        b: [],
        c: [], // Configuration traits
        a: [], // Anchors
      },
      {
        v: 'KERI10JSON00012b_',
        t: 'icp',
        d: 'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB',
        i: 'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB',
        s: '0',
        kt: '1',
        k: ['DJJOg4Zh7e_UZ8k_yga9Jc064-NsT-48ihRukQI8fepu'],
        nt: '1',
        n: ['EGCPznuxQ_rn2_BmDRmrVvsPWYCqREIoaukeP5D7g478'],
        bt: '0',
        b: [],
        c: [],
        a: [],
      },
      {
        v: 'KERI10JSON00013a_',
        t: 'ixn', // Message type: Interaction
        d: 'ECL68Dfi9APmL94VF_A04tkx5f3ZxHTuznv9KF8CRvEm', // SAID of the event
        i: 'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB', // AID of controller
        s: '1', // Sequence number
        p: 'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB', // Prior event SAID
        a: [
          {
            i: 'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
            s: '0',
            d: 'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
          },
        ],
      },
      {
        v: 'KERI10JSON00015f_',
        t: 'dip', // Message type: Delegated Inception
        d: 'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
        i: 'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
        s: '0',
        kt: '1',
        k: ['DAk0e0uHzz6Jm5LbShlr0fius72HTwsR-DdZE4CDqtu-'],
        nt: '1',
        n: ['ED2ouykch12LtXgxKBadg7Jwez0bRYcx-pIlWarEn2Xm'],
        bt: '0',
        b: [],
        c: [],
        a: [],
        di: 'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB',
      },
      {
        v: 'KERI10JSON000106_',
        t: 'rpy', // Message type: Reply
        d: 'EBIyW1AIEE2KjRvzKQQXYf_frOlqmy-bwEuOIf5EM0ZL',
        dt: '2022-01-20T12:57:59.823350+00:00',
        r: '/loc/scheme',
        a: {
          eid: 'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
          scheme: 'https',
          url: 'https://keria-test.rootsid.cloud/',
        },
      },
    ];

    expect(parseCesr(cesr).length).toEqual(parsedCesr.length);
    expect(parseCesr(cesr)).toMatchObject(parsedCesr);
  });
});
