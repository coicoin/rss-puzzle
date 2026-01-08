import type { Component } from 'src/components/component';
import { BASE_URL, BASE_URL_WITHOUT_SLASH, ROUTES, type Route } from './routes';
import { HISTORY_ACTION, type HistoryAction } from './history';
import type { PageMetadata } from 'src/sources/types';
import { Header } from 'src/components/header/header';
import root from 'src/components/main/main';
import { UserService } from 'src/services/user-service';
import { AuthService } from 'src/services/auth-service';
import { fullPath } from './path';

class Router {
  private readonly routes = new Map<Route, { page: () => Promise<Component>; meta: PageMetadata }>();

  public registerRoute(route: Route, page: () => Promise<Component>, meta: PageMetadata = { header: true }): Router {
    this.routes.set(route, { page, meta });
    return this;
  }

  public init(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const path = this.getInternalPath(window.location.pathname);
      this.navigate(path as Route, HISTORY_ACTION.REPLACE);
    });

    window.addEventListener('popstate', (e: PopStateEvent) => {
      const historyPath = e.state?.path ?? window.location.pathname;
      const path = this.getInternalPath(historyPath);
      this.navigate(path, HISTORY_ACTION.SKIP);
    });
  }

  public navigate(route: Route, historyAction: HistoryAction = HISTORY_ACTION.SKIP): void {
    if (!this.isRoute(route)) {
      this.redirectToNotFound();
      return;
    }

    if (!UserService.isAuthenticated() && route !== ROUTES.AUTH) {
      route = ROUTES.AUTH;
      historyAction = HISTORY_ACTION.REPLACE;
    } else if (UserService.isAuthenticated() && route === ROUTES.AUTH) {
      route = ROUTES.START_PAGE;
      historyAction = HISTORY_ACTION.REPLACE;
    }

    const pageMetadata: PageMetadata = this.routes.get(route)?.meta ?? { header: true };
    this.setLayout(pageMetadata);

    if (historyAction === HISTORY_ACTION.PUSH) {
      history.pushState({ route }, '', fullPath(route));
    } else if (historyAction === HISTORY_ACTION.REPLACE) {
      history.replaceState({ route }, '', fullPath(route));
    }

    this.render(route);
  }

  private render(route: Route): void {
    root.innerHTML = '';
    const component: (() => Promise<Component>) | undefined = this.routes.get(route)?.page;
    component?.()
      .then((page) => page.render(root))
      .catch((err) => {
        console.error('Error loading page:', err);
        this.routes
          .get(ROUTES.NOT_FOUND)
          ?.page()
          .then((notFoundPage) => notFoundPage.render(root));
      });
  }

  private redirectToNotFound(): void {
    const path = ROUTES.NOT_FOUND;
    if (window.location.pathname === path) {
      return;
    }
    history.replaceState({ path }, '', fullPath(path));
    this.render(path);
  }

  private isRoute(str: string): str is Route {
    return this.routes.has(str as Route);
  }

  private setLayout(meta: PageMetadata) {
    if (meta.fullscreen) {
      root.classList.add('main_full-screen');
    } else {
      root.classList.remove('main_full-screen');
    }

    if (meta.header === false) {
      Header.hide();
    } else {
      Header.show();
    }

    if (meta.logout === false) {
      AuthService.hideLogout();
    } else {
      AuthService.showLogout();
    }
  }

  private getInternalPath(pathname: string): Route {
    if (pathname !== BASE_URL_WITHOUT_SLASH && pathname !== BASE_URL && !pathname.startsWith(BASE_URL)) {
      return ROUTES.NOT_FOUND;
    }

    return (pathname.slice(BASE_URL_WITHOUT_SLASH.length) || '/') as Route;
  }
}

const router = new Router();
export default router;
