import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-button',
  styleUrl: 'st-button.css',
  shadow: true
})
export class StButton {
  @Prop() buttonSize: string = 'medium';
  @Prop() buttonType: string = 'primary';

  @Event() buttonClicked: EventEmitter;

  buttonClickedHandler(size: string) {
    this.buttonClicked.emit({buttonSize: size});
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.buttonSize} st-button--${this.buttonType}`} onClick={() => this.buttonClickedHandler(this.buttonSize)}>
        <slot />
      </button>
    );
  }
}
