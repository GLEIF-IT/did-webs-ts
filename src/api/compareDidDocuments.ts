import { didDocsAreEqual } from '../utils/document/didDocsAreEqual.js';

export const compareDidDocuments = (
  didDoc1: object,
  didDoc2: object
): boolean => didDocsAreEqual(didDoc1, didDoc2);
