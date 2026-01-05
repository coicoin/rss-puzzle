import { HtmlFactory } from 'src/builder/html-factory';
import type { ElementOptions } from 'src/sources/types';

export class Form {
  private form: HTMLFormElement;

  constructor(
    options: Omit<ElementOptions<'form'>, 'tag'>,
    listener?: (event: Event) => void,
    listenerType: keyof HTMLElementEventMap = 'submit',
  ) {
    this.form = HtmlFactory.createForm(options);
    if (listener) {
      this.form.addEventListener(listenerType, listener);
    }
  }

  public getForm(): HTMLFormElement {
    return this.form;
  }
}
