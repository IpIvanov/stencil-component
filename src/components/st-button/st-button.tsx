import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-button',
  styleUrl: 'st-button.css',
  shadow: true
})
export class StButton {
  @Prop() size: string = 'medium';

  @Event() buttonClicked: EventEmitter;

  buttonClickedHandler(size: string) {
    this.buttonClicked.emit({buttonSize: size});
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.size}`} onClick={() => this.buttonClickedHandler(this.size)}>
        <slot />
      </button>
    );
  }
}
