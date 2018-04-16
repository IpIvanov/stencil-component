import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-button',
  styleUrl: 'st-button.css',
  shadow: true
})
export class StButton {
  @Prop() options: any = {
    size: 'small',
    type: 'primary'
  };

  @Event() buttonClicked: EventEmitter;

  buttonClickedHandler(size: string) {
    this.buttonClicked.emit({buttonSize: size});
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.options.size} st-button--${this.options.type}`} onClick={() => this.buttonClickedHandler(this.options.size)}>
        <slot />
      </button>
    );
  }
}
