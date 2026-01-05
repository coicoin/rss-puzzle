import { CONSTANTS } from 'src/constants/constants';
import { Validator } from './validator';
import type { UserDetails } from 'src/sources/types';
import router from 'src/router/router';
import { ROUTES } from 'src/router/routes';
import { HISTORY_ACTION } from 'src/router/history';
import { messages } from 'src/constants/messages';

export class AuthService {
  private validator: Validator;

  constructor() {
    this.validator = new Validator();
  }

  static showLogout() {
    const button = document.getElementById('logout__button');
    button?.classList.remove('logout_hidden');
  }
  static hideLogout() {
    const button = document.getElementById('logout__button');
    button?.classList.add('logout_hidden');
  }

  public static logout(): void {
    const confirmed = window.confirm(messages.button.logoutConfirmation);

    if (confirmed) {
      window.localStorage.removeItem(CONSTANTS.FIRST_NAME_KEY);
      window.localStorage.removeItem(CONSTANTS.SURNAME_KEY);

      router.navigate(ROUTES.AUTH, HISTORY_ACTION.PUSH);
    }
  }

  public validateUserDetails = (event: Event) => {
    this.validator.handleInput(event);
  };

  public authorize(userDetails: UserDetails): void {
    if (userDetails.firstName) {
      window.localStorage.setItem(CONSTANTS.FIRST_NAME_KEY, userDetails.firstName);
    }
    if (userDetails.surname) {
      window.localStorage.setItem(CONSTANTS.SURNAME_KEY, userDetails.surname);
    }
    router.navigate(ROUTES.START_PAGE, HISTORY_ACTION.PUSH);
  }
}
