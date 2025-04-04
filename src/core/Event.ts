import { z } from 'zod';

import { BAR } from './events/BAR.js';
import { DIP } from './events/DIP.js';
import { DRT } from './events/DRT.js';
import { EXN } from './events/EXN.js';
import { ICP } from './events/ICP.js';
import { IXN } from './events/IXN.js';
import { PRO } from './events/PRO.js';
import { QRY } from './events/QRY.js';
import { RCT } from './events/RCT.js';
import { ROT } from './events/ROT.js';
import { RPY } from './events/RPY.js';
import { XIP } from './events/XIP.js';

import { BARSchema } from './events/BAR.js';
import { DIPSchema } from './events/DIP.js';
import { DRTSchema } from './events/DRT.js';
import { EXNSchema } from './events/EXN.js';
import { ICPSchema } from './events/ICP.js';
import { IXNSchema } from './events/IXN.js';
import { PROSchema } from './events/PRO.js';
import { QRYSchema } from './events/QRY.js';
import { RCTSchema } from './events/RCT.js';
import { ROTSchema } from './events/ROT.js';
import { RPYSchema } from './events/RPY.js';
import { XIPSchema } from './events/XIP.js';

export type Event =
  | BAR
  | DIP
  | DRT
  | EXN
  | ICP
  | IXN
  | PRO
  | QRY
  | RCT
  | ROT
  | RPY
  | XIP;

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
  ROTSchema,
  RPYSchema,
  XIPSchema,
]);

// this is just temporary to get the types working
interface AllEventTypes {
  bar: BAR;
  dip: DIP;
  drt: DRT;
  exn: EXN;
  icp: ICP;
  ixn: IXN;
  pro: PRO;
  qry: QRY;
  rct: RCT;
  roc: ROT;
  rpy: RPY;
  xip: XIP;
}

const _eventTypes: AllEventTypes = {
  bar: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'bar', // Message type: Bare (response with sealed data)
    d: 'EH3ULaU6JR2nmwyvYAfSVPzhzS6b5CMZ-i0d8JZAoTNZ', // SAID of the bare message
    i: 'EAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULaU6JR2nmwyvY', // Identifier prefix (AID) of the sender
    dt: '2020-08-22T17:50:12.988921+00:00', // Date-time of response
    r: '/process/sealed/data', // Route for processing sealed data
    a: {
      // Sealed response data
      d: 'EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM', // SAID of sealed data
      i: 'EAoTNZH3ULvYAfSVPzhzS6baU6JR2nmwyZ-i0d8JZ5CM', // AID related to sealed data
      dt: '2020-08-22T17:50:12.988921+00:00', // Date-time of sealed data
      name: 'John Jones', // Example additional metadata
      role: 'Founder', // Role of the entity in the sealed data
    },
  },
  dip: {
    v: 'KERI10JSON0001ac_', // Version string
    t: 'dip', // Message type: Delegated Inception
    d: 'EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug', // SAID of the event
    i: 'EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug', // Identifier prefix (AID)
    s: '0', // Sequence number, starting at 0
    kt: '2', // Keys signing threshold: 2 of 3
    k: [
      // List of signing keys
      'DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b',
      'DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b',
      'Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM',
    ],
    nt: '3', // Next keys signing threshold: 3 of 5
    n: [
      // List of next key digests
      'ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM',
      'EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS',
      'EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM',
      'ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk',
      'EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh',
    ],
    bt: '2', // Backer threshold
    b: [
      // List of backers (witnesses)
      'BGKVzj4ve0VSd8z_AmvhLg4lqcC_9WYX90k03q-R_Ydo',
      'BuyRFMideczFZoapylLIyCjSdhtqVb31wZkRKvPfNqkw',
      'Bgoq68HCmYNUDgOz4Skvlu306o_NY-NrYuKAVhk3Zh9c',
    ],
    c: [], // Configuration traits
    a: [], // List of anchors (seals)
    di: 'EJJR2nmwyYAZAoTNZH3ULvaU6Z-i0d8fSVPzhzS6b5CM', // Delegator Identifier Prefix (AID)
  },
  drt: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'drt', // Message type: Delegated Rotation
    d: 'E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM', // SAID of the event
    i: 'EZAoTNZH3ULvaU6Z-i0d8JJR2nmwyYAfSVPzhzS6b5CM', // Identifier prefix (AID)
    s: '1', // Sequence number
    p: 'EULvaU6JR2nmwyZ-i0d8JZAoTNZH3YAfSVPzhzS6b5CM', // Prior event SAID
    kt: '2', // Keys signing threshold: 2 of 3
    k: [
      // List of new signing keys
      'DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b',
      'DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b',
      'Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM',
    ],
    nt: '3', // Next keys signing threshold: 3 of 5
    n: [
      // List of next key digests
      'ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM',
      'EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS',
      'EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM',
      'ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk',
      'EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh',
    ],
    bt: '1', // Backer threshold
    br: [
      // List of backers to remove
      'DH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8TNZJZAo5CM',
    ],
    ba: [
      // List of backers to add
      'DTNZH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8JZAo5CM',
    ],
    c: [], // Configuration traits
    a: [], // List of anchors (seals)
  },
  exn: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'exn', // Message type: Exchange
    d: 'EF3Dd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jeyCRXq_bM', // SAID of the exchange message
    i: 'EMF3Dd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jeyCRXq_b', // Identifier prefix (AID) of the sender
    ri: 'ECRXq_bMF3Dd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jey', // Related identifier
    x: 'EF3Dd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jeyCRXq_bM', // Exchange transaction ID
    p: 'EDd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jeyCRXq_bMF3', // Prior message SAID
    dt: '2021-11-12T19:11:19.342132+00:00', // Date-time of exchange message
    r: '/echo/back', // Exchange response route
    q: {}, // Query parameters (empty for this example)
    a: {
      // Exchange response payload
      msg: 'test echo', // Example response message
    },
  },
  icp: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'icp', // Message type: Inception
    d: 'EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug', // SAID of the event
    i: 'EL1L56LyoKrIofnn0oPChS4EyzMHEEk75INJohDS_Bug', // Identifier prefix (AID)
    s: '0', // Sequence number, starting at 0
    kt: '2', // Keys signing threshold: 2 of 3
    k: [
      // List of signing keys
      'DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b',
      'DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b',
      'Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM',
    ],
    nt: '3', // Next keys signing threshold: 3 of 5
    n: [
      // List of next key digests
      'ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM',
      'EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS',
      'EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM',
      'ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk',
      'EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh',
    ],
    bt: '2', // Backer threshold
    b: [
      // List of backers (witnesses)
      'BGKVzj4ve0VSd8z_AmvhLg4lqcC_9WYX90k03q-R_Ydo',
      'BuyRFMideczFZoapylLIyCjSdhtqVb31wZkRKvPfNqkw',
      'Bgoq68HCmYNUDgOz4Skvlu306o_NY-NrYuKAVhk3Zh9c',
    ],
    c: [], // Configuration traits
    a: [], // List of anchors (seals)
  },
  ixn: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'ixn', // Message type: Interaction
    d: 'E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM', // SAID of the event
    i: 'EZAoTNZH3ULvaU6Z-i0d8JJR2nmwyYAfSVPzhzS6b5CM', // Identifier prefix (AID)
    s: '2', // Sequence number
    p: 'EULvaU6JR2nmwyZ-i0d8JZAoTNZH3YAfSVPzhzS6b5CM', // Prior event SAID
    a: [
      // List of anchors (seals)
      {
        d: 'ELvaU6Z-i0d8JJR2nmwyYAZAoTNZH3UfSVPzhzS6b5CM', // SAID of the referenced event
        i: 'EJJR2nmwyYAfSVPzhzS6b5CMZAoTNZH3ULvaU6Z-i0d8', // Identifier of the referenced event
        s: '1', // Sequence number of the referenced event
      },
    ],
  },
  pro: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'pro', // Message type: Prod (request for sealed data)
    d: 'EH3ULaU6JR2nmwyvYAfSVPzhzS6b5CMZ-i0d8JZAoTNZ', // SAID of the prod message
    i: 'EAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULaU6JR2nmwyvY', // Identifier prefix (AID) of the sender
    dt: '2020-08-22T17:50:12.988921+00:00', // Date-time of prod request
    r: '/sealed/data', // Prod route (targeted sealed data)
    rr: '/process/sealed/data', // Processing route for sealed data
    q: {
      // Query parameters for sealed data
      d: 'EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM', // SAID of requested sealed data
      i: 'EAoTNZH3ULvYAfSVPzhzS6baU6JR2nmwyZ-i0d8JZ5CM', // AID related to the request
      s: '5', // Sequence number
      ri: 'EAoTNZH3ULvYAfSVPzhzS6baU6JR2nmwyZ-i0d8JZ5CM', // Related identifier for sealed data
      dd: 'EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM', // Additional data reference
    },
  },
  qry: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'qry', // Message type: Query
    d: 'EH3ULaU6JR2nmwyvYAfSVPzhzS6b5CMZ-i0d8JZAoTNZ', // SAID of the query message
    i: 'EAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULaU6JR2nmwyvY', // Identifier prefix (AID) of the sender
    dt: '2020-08-22T17:50:12.988921+00:00', // Date-time of query creation
    r: '/logs', // Query route
    rr: '/log/processor', // Query sub-route
    q: {
      // Query parameters
      d: 'EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM', // SAID of requested data
      i: 'EAoTNZH3ULvYAfSVPzhzS6baU6JR2nmwyZ-i0d8JZ5CM', // AID related to the query
      s: '5', // Sequence number
      dt: '2020-08-01T12:20:05.123456+00:00', // Date-time of requested data
    },
  },
  rct: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'rct', // Message type: Receipt
    d: 'DZ-i0d8JZAoTNZH3ULvaU6JR2nmwyYAfSVPzhzS6b5CM', // SAID of the key event being receipted, not the receipt message itself
    i: 'AaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM', // Identifier prefix (AID) of the Controller of the KEL
    s: '1', // Sequence number (hex-encoded) of the key event being receipted
  },
  roc: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'rot', // Message type: Rotation
    d: 'E0d8JJR2nmwyYAfZAoTNZH3ULvaU6Z-iSVPzhzS6b5CM', // SAID of the event
    i: 'EZAoTNZH3ULvaU6Z-i0d8JJR2nmwyYAfSVPzhzS6b5CM', // Identifier prefix (AID)
    s: '1', // Sequence number
    p: 'EULvaU6JR2nmwyZ-i0d8JZAoTNZH3YAfSVPzhzS6b5CM', // Prior event SAID
    kt: '2', // Keys signing threshold: 2 of 3
    k: [
      // List of new signing keys
      'DnmwyZ-i0H3ULvad8JZAoTNZaU6JR2YAfSVPzh5CMzS6b',
      'DZaU6JR2nmwyZ-VPzhzSslkie8c8TNZaU6J6bVPzhzS6b',
      'Dd8JZAoTNnmwyZ-i0H3U3ZaU6JR2LvYAfSVPzhzS6b5CM',
    ],
    nt: '3', // Next keys signing threshold: 3 of 5
    n: [
      // List of next key digests
      'ETNZH3ULvYawyZ-i0d8JZU6JR2nmAoAfSVPzhzS6b5CM',
      'EYAfSVPzhzaU6JR2nmoTNZH3ULvwyZb6b5CMi0d8JZAS',
      'EnmwyZdi0d8JZAoTNZYAfSVPzhzaU6JR2H3ULvS6b5CM',
      'ETNZH3ULvS6bYAfSVPzhzaU6JR2nmwyZfi0d8JZ5s8bk',
      'EJR2nmwyZ2i0dzaU6ULvS6b5CM8JZAoTNZH3YAfSVPzh',
    ],
    bt: '1', // Backer threshold
    br: [
      // List of backers to remove
      'DH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8TNZJZAo5CM',
    ],
    ba: [
      // List of backers to add
      'DTNZH3ULvaU6JR2nmwyYAfSVPzhzS6bZ-i0d8JZAo5CM',
    ],
    c: [], // Configuration traits
    a: [], // List of anchors (seals)
  },
  rpy: {
    v: 'KERI10JSON00011c_', // Version string
    t: 'rpy', // Message type: Reply
    d: 'EH3ULaU6JR2nmwyvYAfSVPzhzS6b5CMZ-i0d8JZAoTNZ', // SAID of the reply message
    i: 'EAfSVPzhzS6b5CMZ-i0d8JZAoTNZH3ULaU6JR2nmwyvY', // Identifier prefix (AID) of the sender
    dt: '2020-08-22T17:50:12.988921+00:00', // Date-time of reply creation
    r: '/logs/processor', // Reply route
    a: {
      // Reply data (response to query)
      d: 'EaU6JR2nmwyZ-i0d8JZAoTNZH3ULvYAfSVPzhzS6b5CM', // SAID of the data
      i: 'EAoTNZH3ULvYAfSVPzhzS6baU6JR2nmwyZ-i0d8JZ5CM', // AID related to the response
      name: 'John Jones', // Example additional response data
      role: 'Founder', // Role related to the queried entity
    },
  },
  xip: {
    v: 'KERICAAJSONAACd.', // Version string
    t: 'xip', // Message type: Exchange Transaction Inception
    d: 'EF3Dd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jeyCRXq_bM', // SAID of the exchange inception message
    i: 'EBBwuFAWx3_8s5XSt_0jeyCRXq_bMF3Dd96ATbbMIZgU', // Identifier prefix (AID) of the sender
    ri: 'ECRXq_bMF3Dd96ATbbMIZgUBBwuFAWx3_8s5XSt_0jey', // Related identifier
    dt: '2021-11-12T19:11:19.342132+00:00', // Date-time of inception message
    r: '/echo/out', // Exchange route
    q: {}, // Query parameters (empty for this example)
    a: {
      // Exchange payload
      msg: 'test echo', // Example message content
    },
  },
};
