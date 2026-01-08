import { HtmlFactory } from 'src/builder/html-factory';
import { Component } from 'src/components/component';
import { Icon, NAV_ICON_PATHS } from 'src/components/icons/icons';
import { getIconNameFromPath } from 'src/sources/utils/icon-utils';

export class NavigationMenu extends Component {
  configureView(): HTMLElement {
    return this.configureNav();
  }

  private configureNav(): HTMLDivElement {
    const navMenu: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['navigation'] });

    const icons: Array<HTMLDivElement> = [];

    for (const iconPath of Object.values(NAV_ICON_PATHS)) {
      const headerIcon: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['navigation__icon'] });

      const icon: Icon = new Icon({
        tag: 'img',
        classNames: ['ico', 'ico-img', 'navigation__ico-img'],
        attributes: {
          src: iconPath,
          alt: `${getIconNameFromPath(iconPath)} button`,
          title: getIconNameFromPath(iconPath),
        },
      });
      const button = HtmlFactory.createButton({ classNames: ['navigation-button'] });
      button.append(icon.getIcon());
      headerIcon.append(button);
      icons.push(headerIcon);
    }

    navMenu.append(...icons);

    return navMenu;
  }
}
