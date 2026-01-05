import { HtmlFactory } from 'src/builder/html-factory';
import type { ElementOptions, Listener } from 'src/sources/types';

export class Input {
  private input: HTMLInputElement;

  constructor(options: Omit<ElementOptions<'input'>, 'tag'>, event: Listener) {
    this.input = HtmlFactory.createInput(options);
    if (event) {
      this.input.addEventListener(event.type, event.listener);
    }
  }

  public getInput(): HTMLInputElement {
    return this.input;
  }
}

export const createAuthInput = (inputName: string, validator: (event: Event) => void): HTMLInputElement => {
  return new Input(
    {
      classNames: ['auth__input', `auth__input__${inputName}`],
      id: `auth__input__${inputName}`,
      attributes: { required: 'true', placeholder: ' ' },
    },
    {
      type: 'input',
      listener: (event) => validator(event),
    } as Listener,
  ).getInput();
};

export const configureAuthInputWrapper = (
  input: HTMLInputElement,
  inputName: string,
  textContent: string,
): HTMLLabelElement => {
  const wrapper = HtmlFactory.createLabel({ classNames: [`auth__${inputName}__wrapper`] });
  const placeholder = HtmlFactory.createSpan({
    classNames: ['auth__placeholder', `auth__placeholder__${inputName}`],
    text: textContent,
  });
  const errorMessage = HtmlFactory.createSpan({
    classNames: ['auth__error'],
  });
  wrapper.append(placeholder, input, errorMessage);

  return wrapper;
};
