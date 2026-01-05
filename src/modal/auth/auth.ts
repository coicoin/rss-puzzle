import './auth.scss';
import { HtmlFactory } from 'src/builder/html-factory';
import { Button } from 'src/components/buttons/button';
import { Form } from 'src/components/forms/form';
import { Component } from 'src/components/component';
import type { UserDetails } from 'src/sources/types';
import { configureAuthInputWrapper, createAuthInput } from 'src/components/input/input';
import { AuthService } from 'src/services/auth-service';
import { messages } from 'src/constants/messages';

export class Auth extends Component {
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  configureView(): HTMLElement {
    const authWrapper = HtmlFactory.createDiv({ classNames: ['auth__wrapper'] });
    const authHeader = HtmlFactory.createH3({ classNames: ['auth__title'] });
    const authContent = HtmlFactory.createDiv({ classNames: ['auth__container'] });
    const inputFields = HtmlFactory.createDiv({ classNames: ['auth__input__fields'] });

    const firstNameInput: HTMLInputElement = createAuthInput('firstname', this.authService.validateUserDetails);
    const surnameInput: HTMLInputElement = createAuthInput('surname', this.authService.validateUserDetails);

    const firstNameWrapper: HTMLLabelElement = configureAuthInputWrapper(
      firstNameInput,
      'firstname',
      messages.title.firstName,
    );
    const surnameWrapper: HTMLLabelElement = configureAuthInputWrapper(surnameInput, 'surname', messages.title.surname);

    const authForm: HTMLFormElement = new Form(
      { classNames: ['auth', 'auth__form'], id: 'auth__form' },
      (event: Event) => {
        event.preventDefault();

        this.authService.authorize({
          firstName: firstNameInput.value,
          surname: surnameInput.value,
        } as UserDetails);
      },
      'submit',
    ).getForm();

    const line: HTMLDivElement = HtmlFactory.createDiv({
      classNames: ['auth__divider'],
    });

    const loginButton: HTMLButtonElement = new Button({
      classNames: ['login__button'],
      id: 'login__button',
      text: messages.button.login,
      attributes: { type: 'submit', disabled: 'true' },
    }).getButton();

    authHeader.textContent = messages.title.authorization;
    inputFields.append(firstNameWrapper, surnameWrapper);
    authContent.append(inputFields, line, loginButton);
    authForm.append(authHeader, authContent);
    authWrapper.append(authForm);
    return authWrapper;
  }
}
