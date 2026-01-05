import { HtmlFactory } from 'src/builder/html-factory';

export class StatisticArtwork {
  public configureStatisticArtwork(pictureLink: string, pictureDescription: string): HTMLDivElement {
    const statisticHeader: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['statistic__header'] });
    const picture: HTMLImageElement = HtmlFactory.createImg({ classNames: ['statistic__header__picture'] });
    picture.src = pictureLink;

    const text: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['statistic__header__text'] });
    text.textContent = pictureDescription;
    statisticHeader.append(picture, text);
    return statisticHeader;
  }
}
