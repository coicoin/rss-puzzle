import type { Statistic } from './statistic.types';

export const createStatistic = (): Statistic => ({
  pictureLink: '',
  pictureDescription: '',
  unknown: [],
  known: [],
});
