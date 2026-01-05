import { CONSTANTS } from 'src/constants/constants';
import { messages } from 'src/constants/messages';
import {
  hasOnlyEnglishLettersAndHyphens,
  isFirstLetterUpperCase,
  isGreaterOrEqualMinLength,
} from 'src/sources/utils/string-utils';

export class Validator {
  public readonly EMPTY = '';

  public handleInput(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const minLength: number = target.classList.contains('auth__input__firstname')
      ? CONSTANTS.FIRST_NAME_MIN_LENGTH
      : CONSTANTS.SURNAME_MIN_LENGTH;

    const parent: HTMLElement = target.parentElement as HTMLElement;
    const errorMessage: HTMLSpanElement = parent.querySelector('.auth__error') as HTMLSpanElement;

    const validationResult: string = this.validate(target.value, minLength);
    errorMessage.textContent = validationResult;
    if (validationResult.length > 0) {
      target.classList.add('error');
      errorMessage.classList.add('visible');
    } else {
      target.classList.remove('error');
      errorMessage.classList.remove('visible');
    }

    if (target.value.length > 0) {
      target.classList.add('filled');
    } else {
      target.classList.remove('filled');
    }

    const form: HTMLFormElement = document.getElementById('auth__form') as HTMLFormElement;
    const button: HTMLButtonElement = form.querySelector('.login__button') as HTMLButtonElement;

    this.handleSubmit(form, button);
  }

  private handleSubmit(form: HTMLFormElement, button: HTMLButtonElement) {
    const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll<HTMLInputElement>('.auth__input');
    const hasEmpty: boolean = Array.from(inputs).some((input) => input.value.length === 0);
    const hasError: boolean = Array.from(inputs).some((input) => input.classList.contains('error'));
    button.disabled = hasEmpty || hasError;
  }

  private validate(value: string, minLength: number): string {
    if (value.length === 0) {
      return this.EMPTY;
    }
    if (!hasOnlyEnglishLettersAndHyphens(value)) {
      return messages.error.notValidSymbols;
    }

    if (!isFirstLetterUpperCase(value)) {
      return messages.error.firstSymbolIsNotUpperCase;
    }

    if (!isGreaterOrEqualMinLength(value, minLength)) {
      return messages.error.notValidLength(minLength);
    }

    return this.EMPTY;
  }
}
