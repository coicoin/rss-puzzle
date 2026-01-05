import type { Component } from 'src/components/component';
import { ROUTES, type Route } from './routes';
import { HISTORY_ACTION, type HistoryAction } from './history';
import type { PageMetadata } from 'src/sources/types';
import { Header } from 'src/components/header/header';
import root from 'src/components/main/main';
import { UserService } from 'src/services/user-service';
import { AuthService } from 'src/services/auth-service';

class Router {
  private readonly routes = new Map<Route, { page: () => Promise<Component>; meta: PageMetadata }>();

  public registerRoute(route: Route, page: () => Promise<Component>, meta: PageMetadata = { header: true }): Router {
    this.routes.set(route, { page, meta });
    return this;
  }

  public init(): void {
    document.addEventListener('DOMContentLoaded', () => {
      this.navigate(window.location.pathname as Route, HISTORY_ACTION.REPLACE);
    });

    window.addEventListener('popstate', (e: PopStateEvent) => {
      this.navigate(e.state?.path, HISTORY_ACTION.SKIP);
    });
  }

  public navigate(path: Route, historyAction: HistoryAction = HISTORY_ACTION.SKIP): void {
    if (!UserService.isAuthenticatied()) {
      path = ROUTES.AUTH;
      historyAction = HISTORY_ACTION.REPLACE;
    } else {
      if (window.location.pathname === ROUTES.AUTH) {
        path = ROUTES.START_PAGE;
        historyAction = HISTORY_ACTION.REPLACE;
      }
    }

    if (!this.isRoute(path)) {
      this.redirectToNotFound();
      return;
    }

    const pageMetadata: PageMetadata = this.routes.get(path)?.meta ?? { header: true };
    this.setLayout(pageMetadata);

    if (historyAction === HISTORY_ACTION.PUSH) {
      history.pushState({ path }, '', path);
    } else if (historyAction === HISTORY_ACTION.REPLACE) {
      history.replaceState({ path }, '', path);
    }

    this.render(path);
  }

  private render(path: Route): void {
    root.innerHTML = '';
    const component: (() => Promise<Component>) | undefined = this.routes.get(path)?.page;
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
    history.replaceState({ path }, '', path);
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
}

const router = new Router();
export default router;
