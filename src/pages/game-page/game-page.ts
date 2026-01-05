import { Component } from 'src/components/component';

export class GamePage extends Component {
  configureView(): HTMLElement {
    const gamePage = document.createElement('div');
    gamePage.textContent = 'GAME PAGE';
    return gamePage;
  }
}
