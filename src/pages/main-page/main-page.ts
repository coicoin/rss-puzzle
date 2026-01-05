import 'src/pages/main-page/main-page.scss';
import { HtmlFactory } from 'src/builder/html-factory';
import { Component } from 'src/components/component';
import Icon, { MAIN_PAGE_ICON_PATHS } from 'src/components/buttons/icon/icons';
import { Button } from 'src/components/buttons/button';
import { messages } from 'src/constants/messages';
import { getIconNameFromPath } from 'src/sources/utils/icon-utils';
import { shuffle } from 'src/sources/utils/collection-utils';
import router from 'src/router/router';
import { HISTORY_ACTION } from 'src/router/history';
import { ROUTES } from 'src/router/routes';

export class MainPage extends Component {
  private done: string[] = [
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
    'The woman enjoys riding her bicycle',
  ];

  configureView(): HTMLElement {
    const mainPage: HTMLDivElement = HtmlFactory.createDiv({
      classNames: ['main-page', 'main-page__puzzle', 'wrapper'],
    });
    const gameContainer: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['main-page__puzzle__container'] });
    const puzzleBoard: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['main-page__puzzle__board'] });
    const puzzleImageWrapper: HTMLDivElement = HtmlFactory.createDiv({
      classNames: ['main-page__puzzle__image__wrapper'],
    });
    const puzzleSource: HTMLDivElement = this.configureShuffledPuzzleLine('The woman enjoys riding her bicycle');

    const puzzleButtons: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['main-page__puzzle__buttons'] });
    const continueButton: HTMLButtonElement = new Button(
      {
        classNames: ['button', 'main-page__puzzle__button', 'main-page__puzzle__continue-button'],
        id: 'main-page__puzzle__continue-button',
        text: messages.button.dontKnow,
        attributes: { type: 'button' },
      },
      {
        type: 'click',
        listener: () => {
          router.navigate(ROUTES.STATISTIC_PAGE, HISTORY_ACTION.PUSH);
        },
      },
    ).getButton();

    const checkButton: HTMLButtonElement = new Button(
      {
        classNames: ['button', 'main-page__puzzle__button', 'main-page__puzzle__check-button'],
        id: 'main-page__puzzle__check-button',
        text: messages.button.check,
        attributes: { type: 'button' },
      },
      {
        type: 'click',
        listener: () => {
          router.navigate(ROUTES.STATISTIC_PAGE, HISTORY_ACTION.PUSH);
        },
      },
    ).getButton();
    puzzleButtons.append(continueButton, checkButton);

    puzzleImageWrapper.append(this.configurePuzzleImage());
    puzzleBoard.append(puzzleImageWrapper, this.configurePuzzleLines());
    gameContainer.append(this.configureHintsView(), puzzleBoard, puzzleSource);
    mainPage.append(gameContainer, puzzleButtons);
    return mainPage;
  }

  private configureHintsView(): HTMLDivElement {
    const hints: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['main-page__puzzle__hints'] });
    const volumeIcon: HTMLImageElement = new Icon({
      tag: 'img',
      classNames: ['ico', 'ico-img', 'main-page__puzzle__hint__icon'],
      attributes: {
        src: MAIN_PAGE_ICON_PATHS.AUDIO_HINT,
        alt: `${getIconNameFromPath(MAIN_PAGE_ICON_PATHS.AUDIO_HINT)} icon`,
      },
    }).getIcon();

    const text: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['main-page__puzzle__hint__text'] });
    text.textContent = 'Женщина любит кататься на велосипеде';
    hints.append(volumeIcon, text);
    return hints;
  }

  private configurePuzzleImage(): HTMLDivElement {
    const image: HTMLImageElement = new Image();
    image.src = '/img/background/bg-start.jpg';
    image.classList.add('main-page__puzzle__image');
    image.alt = 'Puzzle image';
    return image;
  }

  private configurePuzzleLines(): HTMLDivElement {
    const puzzleLines: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['main-page__puzzle__lines'] });

    for (const sentence of this.done) {
      const puzzleLine: HTMLDivElement = this.fillPuzzleLine(sentence.split(' '), 'main-page__puzzle__word');
      puzzleLine.classList.add('puzzle__line', 'main-page__puzzle__line');
      puzzleLines.append(puzzleLine);
    }
    return puzzleLines;
  }

  private configureShuffledPuzzleLine(sentence: string): HTMLDivElement {
    const shuffledArray: Array<string> = shuffle<string>(sentence.split(' '));
    const puzzleSourceWords: HTMLDivElement = this.fillPuzzleLine(shuffledArray, 'main-page__puzzle__source__word');
    puzzleSourceWords.classList.add('puzzle__line', 'main-page__puzzle__line__source');
    return puzzleSourceWords;
  }

  private fillPuzzleLine(words: Array<string>, classNameWord: string): HTMLDivElement {
    const puzzleLine: HTMLDivElement = HtmlFactory.createDiv();
    for (const word of words) {
      const sourceWord: HTMLDivElement = HtmlFactory.createDiv({ classNames: ['puzzle__word', classNameWord] });
      sourceWord.textContent = word;
      puzzleLine.append(sourceWord);
    }
    return puzzleLine;
  }
}
