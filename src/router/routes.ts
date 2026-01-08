export const BASE_URL: string = import.meta.env.BASE_URL;
export const BASE_URL_WITHOUT_SLASH = BASE_URL.replace(/\/$/, '');

export const ROUTES = {
  START_PAGE: '/',
  MAIN_PAGE: '/main',
  GAME_PAGE: '/game',
  STATISTIC_PAGE: '/statistic',
  NOT_FOUND: '/not-found',
  AUTH: '/login',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
