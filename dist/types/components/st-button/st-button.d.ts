import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class StButton {
    options: any;
    buttonClicked: EventEmitter;
    buttonClickedHandler(size: string): void;
    render(): JSX.Element;
}
