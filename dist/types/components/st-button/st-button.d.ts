import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class StButton {
    size: string;
    type: string;
    buttonClicked: EventEmitter;
    buttonClickedHandler(size: string): void;
    render(): JSX.Element;
}
