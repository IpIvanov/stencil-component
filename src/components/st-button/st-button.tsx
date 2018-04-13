import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'st-button',
  styleUrl: 'st-button.css',
  shadow: false
})
export class StButton {

  @Prop() title: string = 'Click me!';
  @Prop() size: string = 'small';
  @Prop() type: string;

  @Event() buttonClicked: EventEmitter;

  buttonClickedHandler(event: any) {
    this.buttonClicked.emit(event);
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.size} st-button--${this.type}`} onClick={(event) => this.buttonClickedHandler(event)}>{this.title}</button>
    );
  }
}
