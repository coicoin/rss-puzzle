export abstract class Component {
  private element!: HTMLElement;

  render(root: HTMLElement): void {
    if (!this.element) {
      this.element = this.configureView();
    }
    root.append(this.element);
  }

  abstract configureView(): HTMLElement;
}
