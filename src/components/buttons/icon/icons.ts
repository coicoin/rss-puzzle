import type { ElementOptions } from 'src/sources/types';
import { HtmlFactory } from 'src/builder/html-factory';

export const NAV_ICON_PATHS = {
  VOLUME: '/img/icons/nav/volume-on.png',
  TRANSLATE: '/img/icons/nav/translate.png',
  AUDIO: '/img/icons/nav/audio.png',
  PICTURE: '/img/icons/nav/picture.png',
} as const;

export const MAIN_PAGE_ICON_PATHS = {
  VOLUME: '/img/icons/main-page/audio.gif',
  AUDIO_HINT: '/img/icons/main-page/audio-hint.svg',
} as const;

export const STATISTIC_ICON_PATHS = {
  AUDIO_PLAY: '/img/icons/statistic/play-button.png',
  AUDIO_PAUSE: '/img/icons/statistic/pause-button.png',
} as const;

export const AUTH_ICON_PATHS = {
  LOGOUT: '/img/icons/logout.png',
} as const;

export default class Icon {
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
