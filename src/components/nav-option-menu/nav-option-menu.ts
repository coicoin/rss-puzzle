import { Button } from 'src/components/buttons/button';
import { AuthService } from 'src/services/auth-service';
import Icon, { AUTH_ICON_PATHS } from '../buttons/icon/icons';
import type { Listener } from 'src/sources/types';

export class NavOptionMenu {
  public createLogoutButton = (): HTMLButtonElement => {
    const button: HTMLButtonElement = new Button(
      {
        classNames: ['logout__button', 'logout_hidden'],
        id: 'logout__button',
        attributes: { type: 'button', 'aria-label': 'Logout' },
      },
      {
        type: 'click',
        listener: () => AuthService.logout(),
      } as Listener,
    ).getButton();

    const icon: HTMLImageElement = new Icon({
      tag: 'img',
      classNames: ['ico', 'ico-img', 'logout__ico-img'],
      attributes: { src: AUTH_ICON_PATHS.LOGOUT, alt: 'Logout button', title: 'Logout' },
    }).getIcon();

    button.append(icon);
    return button;
  };
}
