import { BASE_URL_WITHOUT_SLASH, type Route } from './routes';

export function fullPath(route: Route): string {
  return route === '/' ? `${BASE_URL_WITHOUT_SLASH}/` : `${BASE_URL_WITHOUT_SLASH}${route}`;
}
