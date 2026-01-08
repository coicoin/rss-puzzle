import { Header } from 'src/components/header/header';
import { GamePage } from 'src/pages/game-page/game-page';
import { MainPage } from 'src/pages/main-page/main-page';
import { NotFoundPage } from 'src/pages/not-found-page/not-found-page';
import { StartPage } from 'src/pages/start-page/start-page';
import { StatisticPage } from 'src/pages/statistic-page/statistic-page';
import { ROUTES } from 'src/router/routes';
import router from 'src/router/router';
import { Auth } from 'src/modal/auth/auth';

export class App {
  private header: Header;

  constructor() {
    this.header = new Header();
    this.header.render(document.body);

    this.initRouter();
  }

  private initRouter(): void {
    router
      .registerRoute(ROUTES.START_PAGE, async () => new StartPage(), { fullscreen: true, header: false })
      .registerRoute(ROUTES.MAIN_PAGE, async () => new MainPage())
      .registerRoute(ROUTES.GAME_PAGE, async () => new GamePage())
      .registerRoute(ROUTES.STATISTIC_PAGE, async () => new StatisticPage(), { fullscreen: true, header: false })
      .registerRoute(ROUTES.NOT_FOUND, async () => new NotFoundPage(), { header: false })
      .registerRoute(ROUTES.AUTH, async () => new Auth(), { fullscreen: true, header: false, logout: false })
      .init();
  }
}
