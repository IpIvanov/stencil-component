import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class MyComponent {
  // Indicate that name should be a property on our new component
  @Prop() first: string;

  @Prop() last: string;

  @State() isVisible: boolean = true;

  render() {
    return (
      <p>
        Hello, my name is {this.first} {this.last}
      </p>
    );
  }
}
