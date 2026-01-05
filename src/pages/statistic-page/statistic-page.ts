import './statistic-page.scss';
import { HtmlFactory } from 'src/builder/html-factory';
import { Component } from 'src/components/component';
import type { Statistic } from 'src/sources/statistic/statistic.types';
import { TestData } from '../../sources/statistic/statistic.mock';
import { StatisticButton } from 'src/components/statistic-page/statistic-button';
import { StatisticArtwork } from 'src/components/statistic-page/statistic-artwork';
import { StatisticContent } from 'src/components/statistic-page/statistic-content';

export class StatisticPage extends Component {
  private audioTracks: Map<HTMLLIElement, HTMLAudioElement>;
  private statistic: Statistic;

  constructor() {
    super();
    this.audioTracks = new Map<HTMLLIElement, HTMLAudioElement>();
    this.statistic = new TestData().initData();
  }

  configureView(): HTMLElement {
    this.statistic = new TestData().initData();
    const statisticPage: HTMLElement = HtmlFactory.createSection({ classNames: ['statistic__page'] });
    const statisticContainer: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['statistic__container'] });

    const statisticArtwork: HTMLDivElement = new StatisticArtwork().configureStatisticArtwork(
      this.statistic.pictureLink,
      this.statistic.pictureDescription,
    );
    const statisticContent: HTMLDivElement = new StatisticContent().configureStatisticContent(
      this.statistic,
      this.audioTracks,
    );
    const statisticButtons: HTMLDivElement = new StatisticButton().configureStatisticButtons();

    statisticContainer.append(statisticArtwork, statisticContent, statisticButtons);
    statisticPage.append(statisticContainer);
    return statisticPage;
  }
}
