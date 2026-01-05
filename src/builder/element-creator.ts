import type { ElementOptions } from 'src/sources/types';

export class ElementCreator {
  static create<T extends keyof HTMLElementTagNameMap>(options: ElementOptions<T>): HTMLElementTagNameMap[T] {
    const element = document.createElement(options.tag);

    if (options.classNames && options.classNames.length) {
      element.classList.add(...options.classNames);
    }
    if (options.id) {
      element.id = options.id;
    }
    if (options.text) {
      element.textContent = options.text;
    }

    if (options.attributes) {
      Object.entries(options.attributes).forEach(([key, value]) => element.setAttribute(key, value));
    }

    return element;
  }
}
