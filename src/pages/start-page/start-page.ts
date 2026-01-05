import './start-page.scss';
import { Button } from 'src/components/buttons/button';
import { HtmlFactory } from 'src/builder/html-factory';
import { Component } from 'src/components/component';
import { UserService } from 'src/services/user-service';
import { messages } from 'src/constants/messages';
import router from 'src/router/router';
import { ROUTES } from 'src/router/routes';
import { HISTORY_ACTION } from 'src/router/history';

export class StartPage extends Component {
  configureView(): HTMLElement {
    const startPageSection: HTMLElement = HtmlFactory.createSection({ classNames: ['start-page'] });
    const startPageWrapper: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['wrapper', 'start-page__wrapper'] });
    const startPageContent: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['start-page__content'] });
    const background: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['img', 'start-page__img'] });

    const username: string | null = UserService.getUsername();
    if (username) {
      const userGreeting: HTMLParagraphElement = HtmlFactory.createParagraph({
        classNames: ['start-page__greeting-text'],
        text: messages.title.startPageGreeting(username),
      });
      startPageContent.append(userGreeting);
    }

    const gameTitle: HTMLHeadingElement = HtmlFactory.createH1({
      classNames: ['start-page__title'],
      text: import.meta.env.VITE_TITLE ?? messages.title.gameName,
    });

    const gameDescription: HTMLParagraphElement = HtmlFactory.createH2({
      classNames: ['start-page__description'],
      text: messages.title.startPageDescription,
    });

    const startButton: HTMLButtonElement = new Button(
      {
        classNames: ['button', 'start-page__button'],
        id: 'start-page__button',
        text: messages.button.start,
        attributes: { type: 'submit' },
      },
      {
        type: 'click',
        listener: () => {
          if (UserService.getUsername()) {
            router.navigate(ROUTES.MAIN_PAGE, HISTORY_ACTION.PUSH);
          }
        },
      },
    ).getButton();

    startPageContent.append(gameTitle, gameDescription, startButton);
    startPageWrapper.append(background, startPageContent);
    startPageSection.append(startPageWrapper);

    return startPageSection;
  }
}
