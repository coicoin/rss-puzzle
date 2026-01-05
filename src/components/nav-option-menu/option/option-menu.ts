import { HtmlFactory } from 'src/builder/html-factory';
import { Component } from 'src/components/component';
import SelectMenuButton from 'src/components/buttons/select-menu/select-menu-button';

export class OptionMenu extends Component {
  configureView(): HTMLElement {
    const optionsMenu: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['options-menu'] });
    optionsMenu.append(this.configureOptionsMenu('Level'), this.configureOptionsMenu('Page'));
    return optionsMenu;
  }

  private configureOptionsMenu(textContent: string, numberOfOptions: number = 6): HTMLDivElement {
    const selectMenu: SelectMenuButton = new SelectMenuButton();
    const selectContainer: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['options-menu__container'] });

    const label: HTMLLabelElement = HtmlFactory.createLabel({
      classNames: ['options-menu__label'],
      text: textContent,
      attributes: { for: `options-menu__label-${textContent.toLowerCase()}` },
    });

    const select: HTMLSelectElement = selectMenu.createSelect({
      tag: 'select',
      classNames: ['select', 'options-menu__button'],
      id: `options-menu__label-${textContent.toLowerCase()}`,
    });

    const options: Array<HTMLOptionElement> = [];
    for (let i = 1; i <= numberOfOptions; i += 1) {
      const option: HTMLOptionElement = selectMenu.createOption({
        tag: 'option',
        classNames: ['option'],
        text: `${i}`,
        attributes: { value: `${i}` },
      });
      options.push(option);
    }

    select.append(...options);
    selectContainer.append(label, select);
    return selectContainer;
  }
}
