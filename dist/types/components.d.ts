import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import './stencil.core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLStButtonElement extends HTMLStencilElement {
    'size': string;
  }
  var HTMLStButtonElement: {
    prototype: HTMLStButtonElement;
    new (): HTMLStButtonElement;
  };
  interface HTMLElementTagNameMap {
    'st-button': HTMLStButtonElement;
  }
  interface ElementTagNameMap {
    'st-button': HTMLStButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'st-button': JSXElements.StButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface StButtonAttributes extends HTMLAttributes {
      'onButtonClicked'?: (event: CustomEvent) => void;
      'size'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
