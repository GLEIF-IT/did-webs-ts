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
