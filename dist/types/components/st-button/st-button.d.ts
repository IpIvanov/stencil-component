import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class StButton {
    size: string;
    type: string;
    buttonClicked: EventEmitter;
    buttonClickedHandler(event: any): void;
    ionFocus: EventEmitter<FocusEvent>;
    onFocus(): void;
    render(): JSX.Element;
}
