import { Event } from '../../core/Event';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';

import { parseKeyEventStream } from './parseKeyEventStream';
import {
  sortKeyEventStream,
  _fancyPrintSortedEvents,
} from './sortKeyEventStream';
import { getDelegatorKeyStateForDelegate } from './getDelegatorKeyState';

const cesr =
  '{"v":"KERI10JSON00012b_","t":"icp","d":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","i":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","s":"0","kt":"1","k":["DEx0lnNR0WmphGiX-4FYv1-2iKxKph74lqi0V3KDdLKP"],"nt":"1","n":["EA1aDFBBlSc3lZe_IQqBYr6XV8-YDYWwyLIVmtm5Lng5"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAAAl33Xb8MWQwwZFsvpROZViXa37VsFynZlyzF8NdhZOakzyivVCeyNJ_mI8D81gy2hxwpUAaVxB7O92kbrM8SYK-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-15T19c59c12d820369p00c00{"v":"KERI10JSON00012b_","t":"icp","d":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","i":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","s":"0","kt":"1","k":["DJJOg4Zh7e_UZ8k_yga9Jc064-NsT-48ihRukQI8fepu"],"nt":"1","n":["EGCPznuxQ_rn2_BmDRmrVvsPWYCqREIoaukeP5D7g478"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAACpL_o8Idf6Wliy8KraTF9ksh6EhHcDLegpAmMG_b0GGlnWjuxYeQ03fUcwFsau2T8Zotrfyc_aHpj-8T9FbQsL-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-15T19c59c09d022532p00c00{"v":"KERI10JSON00013a_","t":"ixn","d":"ECL68Dfi9APmL94VF_A04tkx5f3ZxHTuznv9KF8CRvEm","i":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","s":"1","p":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB","a":[{"i":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","s":"0","d":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB"}]}-VAn-AABAACfS_z6yUi64bjRH1YeiDJY2a7tY6UQvT9X9VO1IS0kFt2RydHK2fiXzpZ1XhqrIznJnHGU_kkLL8327K7uUo4E-EAB0AAAAAAAAAAAAAAAAAAAAAAB1AAG2025-03-15T19c59c10d472734p00c00{"v":"KERI10JSON00015f_","t":"dip","d":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","i":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","s":"0","kt":"1","k":["DAk0e0uHzz6Jm5LbShlr0fius72HTwsR-DdZE4CDqtu-"],"nt":"1","n":["ED2ouykch12LtXgxKBadg7Jwez0bRYcx-pIlWarEn2Xm"],"bt":"0","b":[],"c":[],"a":[],"di":"EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB"}-VA5-AABAAClr8tKZhkX21dKBkuAEvZTWtra_geau2pcjp1QeygI2GkioK5_KSGAtS6X1mu2nEEDFAc0RaCo9In4mgwIZicM-GAB0AAAAAAAAAAAAAAAAAAAAAABECL68Dfi9APmL94VF_A04tkx5f3ZxHTuznv9KF8CRvEm-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-15T19c59c07d057579p00c00{"v":"KERI10JSON000106_","t":"rpy","d":"EBIyW1AIEE2KjRvzKQQXYf_frOlqmy-bwEuOIf5EM0ZL","dt":"2022-01-20T12:57:59.823350+00:00","r":"/loc/scheme","a":{"eid":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB","scheme":"https","url":"https://keria-test.rootsid.cloud/"}}-VA0-FABEBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB0AAAAAAAAAAAAAAAAAAAAAAAEBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB-AABAAA2ThMDEfMa0QhNCkA6JLycqcKRYuoVJ1C_qrynhQGU_U2ArRRiNFzAPb7cQjrcvAbQ3yqk2TTVXtfvFPsfJtsB{"v":"KERI10JSON000111_","t":"rpy","d":"EDSqoaOsxYDJVqzeOjr77jNqkTpZ85us1Z9YICHTlyco","dt":"2025-03-15T19:59:13.262000+00:00","r":"/end/role/add","a":{"cid":"EKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB","role":"agent","eid":"EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB"}}-VA0-FABEKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB0AAAAAAAAAAAAAAAAAAAAAAAEKu2gkyoKhVsQBZEeYgp9SwGOl0PKnH4HvB10dkqC7lB-AABAADc5SVmWL7JCAwPyvfj22S4bepE8IKL72laSmAZ_ChY36sMUBd0_bIWUZr6kh11ybxSzwftqdTd5oIYuDNFHqIE';

describe('getDelegatorKeyState', () => {
  it("'should return the correct delegator key state if a 'dip' event is present", () => {
    const events = parseKeyEventStream(cesr) as Event[];
    const sorted = sortKeyEventStream(events);
    _fancyPrintSortedEvents(sorted, 1);
    const state = getDelegatorKeyStateForDelegate(
      'EBJ3FrFBhGxgfGNteaGONEPWCe5gt4V2d5qqsPGh3SsB',
      sorted
    );
    expect(state).toBeDefined();
    const expectedState = {
      identifier: 'EFCwLHkNR2UAZrDHBd09iNzbzqdLy2hozJVL3swdd1dB',
      keyState: {
        kt: '1',
        k: ['DJJOg4Zh7e_UZ8k_yga9Jc064-NsT-48ihRukQI8fepu'],
      },
    } as IdentifierAndKeyState;
    expect(state).toEqual(expectedState);
  });
});
