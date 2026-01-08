import { HtmlFactory } from 'src/builder/html-factory';
import type { ElementOptions } from 'src/sources/types';

export class Image {
  private img: HTMLImageElement;

  constructor(options: ElementOptions<'img'>) {
    this.img = HtmlFactory.createImg(options);
  }

  public getIcon(): HTMLImageElement {
    return this.img;
  }

  public setIcon(src: string) {
    this.img.src = src;
  }
}
