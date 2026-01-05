import './main.scss';
import { HtmlFactory } from 'src/builder/html-factory';

class Main {
  public createRoot(): HTMLElement {
    const main = HtmlFactory.createMain({ classNames: ['main'], id: 'main' });
    document.body.append(main);
    return main;
  }
}

const main = new Main().createRoot();
export default main;
