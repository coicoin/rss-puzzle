import { HtmlFactory } from 'src/builder/html-factory';
import { HISTORY_ACTION } from 'src/router/history';
import { ROUTES } from 'src/router/routes';
import router from 'src/router/router';
import { messages } from 'src/constants/messages';
import { Button } from 'src/components/buttons/button';

export class StatisticButton {
  public configureStatisticButtons(): HTMLDivElement {
    const statisticButtons: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['statistic__buttons'] });
    const continueButton: HTMLButtonElement = new Button(
      {
        classNames: ['statistic__continue-button'],
        id: 'statistic__continue-button',
        text: messages.button.continue,
        attributes: { type: 'button' },
      },
      {
        type: 'click',
        listener: () => {
          router.navigate(ROUTES.MAIN_PAGE, HISTORY_ACTION.PUSH);
        },
      },
    ).getButton();

    statisticButtons.append(continueButton);
    return statisticButtons;
  }
}
