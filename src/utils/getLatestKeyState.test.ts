import { parseKeyEventStream } from './parseKeyEventStream.js';
import {
  sortKeyEventStream,
  _fancyPrintSortedEvents,
} from './sortKeyEventStream.js';
import { getLatestKeyState } from './getLatestKeyState.js';

describe('getLatestKeyState', () => {
  // Obviously, just a simulation of a real CESR stream
  const rotCesr =
    '{"v":"KERI10JSON00012b_","t":"icp","d":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","i":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","s":"0","kt":"1","k":["DEx0lnNR0WmphGiX-4FYv1-2iKxKph74lqi0V3KDdLKP"],"nt":"1","n":["EA1aDFBBlSc3lZe_IQqBYr6XV8-YDYWwyLIVmtm5Lng5"],"bt":"0","b":[],"c":[],"a":[]}' +
    '-not-a-valid-signature-block' +
    '{"v":"KERI10JSON00012b_","t":"icp","d":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","i":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","s":"0","kt":"1","k":["DJJOg4Zh7e_UZ8k_yga9Jc064-NsT-48ihRukQI8fepu"],"nt":"1","n":["EGCPznuxQ_rn2_BmDRmrVvsPWYCqREIoaukeP5D7g478"],"bt":"0","b":[],"c":[],"a":[]}' +
    '-not-a-valid-signature-block' +
    '{"v":"KERI10JSON00013a_","t":"ixn","d":"ECL68Dfi9APmL94VF_A04tkx5f3ZxHTuznv9KF8CRvEm","i":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","s":"1","p":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","a":[{"i":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","s":"0","d":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB"}]}' +
    '-not-a-valid-signature-block' +
    '{"v":"KERI10JSON00015f_","t":"icp","d":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","i":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","s":"0","kt":"1","k":["DAk0e0uHzz6Jm5LbShlr0fius72HTwsR-DdZE4CDqtu-"],"nt":"1","n":["ED2ouykch12LtXgxKBadg7Jwez0bRYcx-pIlWarEn2Xm"],"bt":"0","b":[],"c":[],"a":[],"di":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB"}' +
    '-not-a-valid-signature-block' +
    '{"v":"KERI10JSON00012b_","t":"rot","d":"E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM","i":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","s":"1","p":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","kt":"2","k":["DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b","DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b","Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM"],"nt":"1","n":["EGCPznuxQ_rn2_BmDRmrVvsPWYCqREIoaukeP5D7g478"],"bt":"0","ba":[],"br":[],"c":[],"a":[]}' +
    '-not-a-valid-signature-block' +
    '{"v":"KERI10JSON000106_","t":"rpy","d":"EBIyW1AIEE2KjRvzKQQXYf_frOlqmy-bwEuOIf5EM0ZL","dt":"2022-01-20T12:57:59.823350+00:00","r":"/loc/scheme","a":{"eid":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","scheme":"https","url":"https://keria-test.rootsid.cloud/"}}' +
    '-not-a-valid-signature-block' +
    '{"v":"KERI10JSON000111_","t":"rpy","d":"EDSqoaOsxYDJVqzeOjr77jNqkTpZ85us1Z9YICHTlyco","dt":"2025-03-15T19:59:13.262000+00:00","r":"/end/role/add","a":{"cid":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","role":"agent","eid":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB"}}' +
    '-not-a-valid-signature-block';
  it('should correctly retrieve the keystate for all three AIDs in the stream', () => {
    const events = parseKeyEventStream(rotCesr) as Event[];
    const sorted = sortKeyEventStream(events);
    // _fancyPrintSortedEvents(sorted, 1);

    const state1 = getLatestKeyState(
      'EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB',
      sorted
    );
    expect(state1).toEqual({
      kt: '2',
      k: [
        'DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b',
        'DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b',
        'Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM',
      ],
    });

    const state2 = getLatestKeyState(
      'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB',
      sorted
    );
    expect(state2).toEqual({
      kt: '1',
      k: ['DJJOg4Zh7e_UZ8k_yga9Jc064-NsT-48ihRukQI8fepu'],
    });

    const state3 = getLatestKeyState(
      'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
      sorted
    );
    expect(state3).toEqual({
      kt: '1',
      k: ['DAk0e0uHzz6Jm5LbShlr0fius72HTwsR-DdZE4CDqtu-'],
    });
  });
});
