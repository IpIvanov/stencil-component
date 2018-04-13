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
    this.buttonClicked.emit(event);
  }
  //onClick={(event) => this.buttonClickedHandler(event)} 

  @Event() ionFocus: EventEmitter<FocusEvent>;

  onFocus() {
    this.ionFocus.emit();
  }

  render() {
    return (
      <button type="button" class={`st-button st-button--${this.size} st-button--${this.type}`} onFocus={this.onFocus.bind(this)}>
        <slot />
      </button>
    );
  }
}
