import { CONSTANTS } from 'src/constants/constants';

export class UserService {
  public static getUsername(): string {
    return `${window.localStorage.getItem(CONSTANTS.FIRST_NAME_KEY) ?? ''} \
    ${window.localStorage.getItem(CONSTANTS.SURNAME_KEY) ?? ''}`.trim();
  }

  public static isAuthenticated(): boolean {
    return Boolean(
      window.localStorage.getItem(CONSTANTS.FIRST_NAME_KEY) && window.localStorage.getItem(CONSTANTS.SURNAME_KEY),
    );
  }
}
