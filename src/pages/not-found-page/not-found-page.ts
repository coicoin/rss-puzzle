import './not-found-page.scss';
import { HtmlFactory } from 'src/builder/html-factory';
import { Component } from 'src/components/component';
import { HISTORY_ACTION } from 'src/router/history';
import router from 'src/router/router';
import { ROUTES } from 'src/router/routes';

export class NotFoundPage extends Component {
  configureView(): HTMLElement {
    const notFoundPage = HtmlFactory.createSection({ classNames: ['not-found-page', 'wrapper'] });
    const notFoundPageWrapper = HtmlFactory.createDiv({ classNames: ['not-found-page__wrapper'] });
    const image = HtmlFactory.createDiv({ classNames: ['not-found-page__image'] });
    image.title = 'Go to home page';
    image.addEventListener('click', () => router.navigate(ROUTES.START_PAGE, HISTORY_ACTION.PUSH));
    notFoundPageWrapper.append(image);
    notFoundPage.append(notFoundPageWrapper);
    return notFoundPage;
  }
}
