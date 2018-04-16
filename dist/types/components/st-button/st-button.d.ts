import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class StButton {
    size: string;
    buttonClicked: EventEmitter;
    buttonClickedHandler(size: string): void;
    render(): JSX.Element;
}
