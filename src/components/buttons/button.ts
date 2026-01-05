import { HtmlFactory } from '../../builder/html-factory';
import type { ElementOptions, Listener } from '../../sources/types';

export class Button {
  private button: HTMLButtonElement;

  constructor(options: Omit<ElementOptions<'button'>, 'tag'>, event?: Listener) {
    this.button = HtmlFactory.createButton(options);
    if (event) {
      this.button.addEventListener(event.type, event.listener);
    }
  }

  public getButton(): HTMLButtonElement {
    return this.button;
  }
}
