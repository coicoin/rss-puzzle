import type { Statistic } from '../statistic/statistic.types';
import { createStatistic } from '../statistic/statistic.factory';

export class TestData {
  public initData(): Statistic {
    const statistic = createStatistic();

    statistic.pictureLink = '/img/background/bg-start.jpg';
    statistic.pictureDescription = 'AIVAZOVSKY, Ivan Konstantinovich - The Ninth Wave (1850)';

    statistic.known.push(
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
      {
        audioLink: 'files/03_0048_example.mp3',
        text: 'I managed to get good grades on my report card',
      },
    );

    statistic.unknown.push(
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
      {
        audioLink: 'files/03_0049_example.mp3',
        text: 'He ate the carrot instead of the ice cream',
      },
    );

    return statistic;
  }
}
