export type StatisticMedia = {
  audioLink: string;
  text: string;
};

export type Statistic = {
  pictureLink: string;
  pictureDescription: string;
  unknown: Array<StatisticMedia>;
  known: Array<StatisticMedia>;
};

export type StatisticAnswer = 'known' | 'unknown';
