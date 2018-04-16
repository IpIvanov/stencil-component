import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class StButton {
    buttonSize: string;
    buttonType: string;
    buttonClicked: EventEmitter;
    buttonClickedHandler(size: string): void;
    render(): JSX.Element;
}
