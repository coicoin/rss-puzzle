import { CONSTANTS } from 'src/constants/constants';

export const hasOnlyEnglishLettersAndHyphens = (value: string): boolean =>
  CONSTANTS.ENGLISH_LETTERS_OR_HYPHEN_REGEX.test(value);

export const isFirstLetterUpperCase = (value: string): boolean =>
  value.length > 0 && value[0] === value[0].toUpperCase() && CONSTANTS.ENGLISH_LETTERS_REGEX.test(value);

export const isGreaterOrEqualMinLength = (value: string, minLength: number): boolean => value.length >= minLength;
