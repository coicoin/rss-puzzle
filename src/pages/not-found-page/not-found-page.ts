import { Component } from 'src/components/component';

export class NotFoundPage extends Component {
  configureView(): HTMLElement {
    const notFoundPage = document.createElement('div');
    notFoundPage.textContent = 'NOT FOUND';
    return notFoundPage;
  }
}
