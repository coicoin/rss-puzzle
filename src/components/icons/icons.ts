import type { ElementOptions } from 'src/sources/types';
import { HtmlFactory } from 'src/builder/html-factory';
import { BASE_URL } from 'src/router/routes';

export const NAV_ICON_PATHS = {
  VOLUME: `${BASE_URL}img/icons/nav/volume-on.png`,
  TRANSLATE: `${BASE_URL}img/icons/nav/translate.png`,
  AUDIO: `${BASE_URL}img/icons/nav/audio.png`,
  PICTURE: `${BASE_URL}img/icons/nav/picture.png`,
} as const;

export const MAIN_PAGE_ICON_PATHS = {
  AUDIO_HINT: `${BASE_URL}img/icons/main-page/audio-hint.svg`,
} as const;

export const STATISTIC_ICON_PATHS = {
  AUDIO_PLAY: `${BASE_URL}img/icons/statistic/play-button.png`,
  AUDIO_PAUSE: `${BASE_URL}img/icons/statistic/pause-button.png`,
} as const;

export const AUTH_ICON_PATHS = {
  LOGOUT: `${BASE_URL}img/icons/logout.png`,
} as const;

export class Icon {
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
