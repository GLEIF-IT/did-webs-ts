import validator from 'validator';

export const isValidHost = (input: string): boolean => validator.isFQDN(input);
