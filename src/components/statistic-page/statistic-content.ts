import { HtmlFactory } from 'src/builder/html-factory';
import { messages } from 'src/constants/messages';
import type { Statistic, StatisticAnswer, StatisticMedia } from 'src/sources/statistic/statistic.types';
import Icon, { STATISTIC_ICON_PATHS } from '../buttons/icon/icons';

export class StatisticContent {
  public configureStatisticContent(
    statistic: Statistic,
    audioTracks: Map<HTMLLIElement, HTMLAudioElement>,
  ): HTMLDivElement {
    const statisticContent = HtmlFactory.createDiv({ classNames: ['statistic__content'] });

    const unknownList = HtmlFactory.createUl({ classNames: ['statistic__list', 'statistic__content__unknown__list'] });
    unknownList.textContent = `${messages.title.dontKnown}`;
    const unknownCount = HtmlFactory.createSpan({ classNames: ['statistic__count', 'statistic__unknown__count'] });
    unknownCount.textContent = `${statistic.unknown.length}`;
    unknownList.append(unknownCount);
    for (const media of statistic.unknown) {
      unknownList.append(this.createStatisticItem(media, 'unknown', audioTracks));
    }

    const knownList = HtmlFactory.createUl({ classNames: ['statistic__list', 'statistic__content__known__list'] });
    knownList.textContent = `${messages.title.know}`;
    const knownCount = HtmlFactory.createSpan({ classNames: ['statistic__count', 'statistic__known__count'] });
    knownCount.textContent = `${statistic.known.length}`;
    knownList.append(knownCount);
    for (const media of statistic.known) {
      knownList.append(this.createStatisticItem(media, 'known', audioTracks));
    }

    statisticContent.append(unknownList, knownList);
    return statisticContent;
  }

  private createStatisticItem(
    media: StatisticMedia,
    type: StatisticAnswer,
    audioTracks: Map<HTMLLIElement, HTMLAudioElement>,
  ): HTMLLIElement {
    const item = HtmlFactory.createLi({ classNames: ['statistic__list__item', `statistic__content__${type}__item`] });
    const audio = new Audio(import.meta.env.VITE_PUZZLE_API + media.audioLink);

    const icon = new Icon({
      tag: 'img',
      classNames: ['ico', 'ico-img', 'statistic__ico-img'],
      attributes: {
        src: STATISTIC_ICON_PATHS.AUDIO_PLAY,
        alt: 'Audio',
        title: 'Play',
      },
    }).getIcon();
    icon.addEventListener('click', () => {
      audioTracks.forEach((track: HTMLAudioElement, li: HTMLLIElement) => {
        if (item !== li) {
          track.pause();
          const otherIcon: HTMLImageElement = li.querySelector('.statistic__ico-img') as HTMLImageElement;
          otherIcon.src = STATISTIC_ICON_PATHS.AUDIO_PLAY;
        }
      });
      if (audio.paused || icon.src.includes(STATISTIC_ICON_PATHS.AUDIO_PLAY)) {
        audio.currentTime = 0;
        audio.play().catch((error) => console.log(messages.error.audioError(error)));
        icon.src = STATISTIC_ICON_PATHS.AUDIO_PAUSE;
      } else {
        audio.pause();
        icon.src = STATISTIC_ICON_PATHS.AUDIO_PLAY;
      }
    });

    audio.addEventListener('ended', () => {
      icon.src = STATISTIC_ICON_PATHS.AUDIO_PLAY;
    });

    audioTracks.set(item, audio);

    const text = HtmlFactory.createSpan({ classNames: [`statistic__${type}__item__text`] });
    text.textContent = media.text;

    item.append(icon, text);
    return item;
  }
}
