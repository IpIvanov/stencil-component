import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-button',
  styleUrl: 'st-button.css',
  shadow: false
})
export class StButton {

  @Prop() size: string = 'small';
  @Prop() type: string;

  @Event() buttonClicked: EventEmitter;

  buttonClickedHandler(size: string) {
    this.buttonClicked.emit({buttonSize: size});
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.size} st-button--${this.type}`} onClick={() => this.buttonClickedHandler(this.size)}>
        <slot />
      </button>
    );
  }
}
