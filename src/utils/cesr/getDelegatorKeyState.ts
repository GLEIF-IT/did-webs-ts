import { Aid, createAid } from '../../core/Aid.js';
import { SortedKeyEventStream } from './sortKeyEventStream.js';
import { KeyState } from '../../core/KeyState.js';

import { getLatestKeyState } from './getLatestKeyState.js';

// function is called getDelegateKeyState
// first, traverse the sorted event stream for the most recent 'dip' event for this identifier (if any)
// retrieve the AID identifier in the 'di' field of the 'dip' event
// get the latest key state for the delegator AID using the getLatestKeyState function
export const getDelegatorKeyState = (
  identifier: Aid,
  events: SortedKeyEventStream
): KeyState | undefined => {
  const sortedEvents = events.get(identifier);
  if (!sortedEvents || sortedEvents.length === 0) {
    throw new Error(`No events found for identifier: ${identifier}`);
  }
  // To find latest key state, filter events to only include delegation events
  const validEvents = sortedEvents.filter((event) => event.t === 'dip');
  if (validEvents.length === 0) return undefined;
  // Since sortedEvents are in descending order, the first valid event is the current key state
  const latestEvent = validEvents[0];
  const delegatorAid = createAid(latestEvent.di); // if it's a 'dip' event, the 'di' field will be there
  console.log(`Delegator AID: ${delegatorAid}`);
  // Get the latest key state for the delegator AID
  const delegatorKeyState = getLatestKeyState(delegatorAid, events);
  if (!delegatorKeyState) {
    throw new Error(`No key state found for delegator AID: ${delegatorAid}`);
  }
  return delegatorKeyState;
};

// {
//   "v": "KERI10JSON00012b_",
//   "t": "icp", // inception event for delegator...
//   "d": "EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY",
//   "i": "EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY", // delegator aid
//   "s": "0", // first event in sequence for delegator
//   "kt": "1",
//   "k": ["DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC"], // current key state of delegator
//   "n": ["EBC3wESsVMjte9pDOsxi3qqw2YdFIhP0aDJCdGiy01ua"],
//   "bt": "0",
//   "b": [],
//   "c": [],
//   "a": [],
// }

// {
//   "v": "KERI10JSON00013a_",
//   "t": "ixn", // interaction event
//   "d": "EGYHF4pJVULp2mJp-pLEhTV2Y50AejwIQQzxq7esJ4Al",
//   "i": "EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY",
//   "s": "1", // second event in sequence for delegator.
//   "p": "EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY",
//    // anchor information - seals external information to this event stream
//   "a": [
//     {
//       "i": "EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy", // delegate aid
//       "s": "0",
//       "d": "EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy",
//     },
//   ],
// }

// {
//   "v": "KERI10JSON00015f_",
//   "t": "dip", // delegation event for delegate
//   "d": "EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy",
//   "i": "EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy", // delegate aid
//   "s": "0",
//   "kt": "1",
//   "k": ["DFl61PVNLsQ6Jo3c1Eu6H6vMDzdrXirdDHSVh86PD5Kp"], // current key state of delegate
//   "nt": "1",
//   "n": ["EL0fKE9YzQ4MH-mH_KyLlkxwYEXUFNP5-Q3CUk6CcBVJ"],
//   "bt": "0",
//   "b": [],
//   "c": [],
//   "a": [],
//   "di": "EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY", // delegator aid
// }
