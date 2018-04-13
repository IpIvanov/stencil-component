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

  buttonClickedHandler(event: any) {
    alert('from component');
    this.buttonClicked.emit({fromComponent: true});
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.size} st-button--${this.type}`} onClick={(event) => this.buttonClickedHandler(event)}>
        <slot />
      </button>
    );
  }
}
