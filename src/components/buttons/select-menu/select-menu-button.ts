import { HtmlFactory } from 'src/builder/html-factory';
import type { ElementOptions } from 'src/sources/types';

export default class SelectMenuButton {
  public createSelect(elementOptions: ElementOptions<'select'>) {
    const select: HTMLSelectElement = HtmlFactory.createSelect(elementOptions);
    return select;
  }

  public createOption(elementOptions: ElementOptions<'option'>) {
    const option: HTMLOptionElement = HtmlFactory.createOption(elementOptions);
    return option;
  }
}
