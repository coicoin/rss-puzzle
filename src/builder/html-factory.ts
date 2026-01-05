import type { ElementOptions } from 'src/sources/types';
import { ElementCreator } from './element-creator';

export class HtmlFactory {
  static createMain(options?: Omit<ElementOptions<'main'>, 'tag'>): HTMLElement {
    return HtmlFactory.create('main', options);
  }

  static createSection(options?: Omit<ElementOptions<'section'>, 'tag'>): HTMLElement {
    return HtmlFactory.create('section', options);
  }

  static createDiv(options?: Omit<ElementOptions<'div'>, 'tag'>): HTMLDivElement {
    return HtmlFactory.create('div', options);
  }

  static createButton(options?: Omit<ElementOptions<'button'>, 'tag'>): HTMLButtonElement {
    return HtmlFactory.create('button', options);
  }

  static createSelect(options?: Omit<ElementOptions<'select'>, 'tag'>): HTMLSelectElement {
    return HtmlFactory.create('select', options);
  }

  static createOption(options?: Omit<ElementOptions<'option'>, 'tag'>): HTMLOptionElement {
    return HtmlFactory.create('option', options);
  }

  static createImg(options?: Omit<ElementOptions<'img'>, 'tag'>): HTMLImageElement {
    return HtmlFactory.create('img', options);
  }

  static createLabel(options?: Omit<ElementOptions<'label'>, 'tag'>): HTMLLabelElement {
    return HtmlFactory.create('label', options);
  }

  static createH1(options?: Omit<ElementOptions<'h1'>, 'tag'>): HTMLHeadingElement {
    return HtmlFactory.create('h1', options);
  }

  static createH2(options?: Omit<ElementOptions<'h2'>, 'tag'>): HTMLHeadingElement {
    return HtmlFactory.create('h2', options);
  }

  static createH3(options?: Omit<ElementOptions<'h3'>, 'tag'>): HTMLHeadingElement {
    return HtmlFactory.create('h3', options);
  }

  static createParagraph(options?: Omit<ElementOptions<'p'>, 'tag'>): HTMLParagraphElement {
    return HtmlFactory.create('p', options);
  }

  static createSpan(options?: Omit<ElementOptions<'span'>, 'tag'>): HTMLSpanElement {
    return HtmlFactory.create('span', options);
  }

  static createUl(options?: Omit<ElementOptions<'ul'>, 'tag'>): HTMLUListElement {
    return HtmlFactory.create('ul', options);
  }
  static createLi(options?: Omit<ElementOptions<'li'>, 'tag'>): HTMLLIElement {
    return HtmlFactory.create('li', options);
  }

  static createForm(options?: Omit<ElementOptions<'form'>, 'tag'>): HTMLFormElement {
    return HtmlFactory.create('form', options);
  }

  static createInput(options?: Omit<ElementOptions<'input'>, 'tag'>): HTMLInputElement {
    return HtmlFactory.create('input', options);
  }

  private static create<T extends keyof HTMLElementTagNameMap>(
    tag: T,
    options?: Omit<ElementOptions<T>, 'tag'>,
  ): HTMLElementTagNameMap[T] {
    return ElementCreator.create({ tag, ...options } as ElementOptions<T>);
  }
}
