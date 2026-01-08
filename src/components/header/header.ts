import './header.scss';
import { HtmlFactory } from 'src/builder/html-factory';
import { Logout } from 'src/components/nav-option-menu/logout/logout';
import { Component } from 'src/components/component';
import { NavigationMenu } from 'src/components/nav-option-menu/nav/nav-menu';
import { OptionMenu } from 'src/components/nav-option-menu/option/option-menu';

export class Header extends Component {
  private logout: Logout;

  constructor() {
    super();
    this.logout = new Logout();
  }

  configureView(): HTMLElement {
    const header: HTMLElement = HtmlFactory.createSection({ classNames: ['header'] });
    const headerWrapper: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['wrapper', 'header__wrapper'] });
    const nav: HTMLElement = new NavigationMenu().configureView();
    const optionMenu: HTMLElement = new OptionMenu().configureView();
    const logout: HTMLButtonElement = this.logout.createLogoutButton();

    nav.classList.add('header__navigation');
    optionMenu.classList.add('header__options-menu');
    logout.classList.add('header__logout');
    headerWrapper.append(optionMenu, nav);
    header.append(headerWrapper, logout);

    return header;
  }

  public static hide(): void {
    const header: HTMLElement | null = document.querySelector('.header__wrapper');
    header?.classList.add('header_hidden');
  }

  public static show(): void {
    const header: HTMLElement | null = document.querySelector('.header__wrapper');
    header?.classList.remove('header_hidden');
  }
}
