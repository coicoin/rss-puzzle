export const ROUTES = {
  START_PAGE: '/',
  MAIN_PAGE: '/main',
  GAME_PAGE: '/game',
  STATISTIC_PAGE: '/statistic',
  NOT_FOUND: '/not-found',
  AUTH: '/login',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
