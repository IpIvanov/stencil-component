export class StButton {
    constructor() {
        this.size = 'small';
    }
    buttonClickedHandler(event) {
        alert('from component');
        this.buttonClicked.emit(event);
    }
    onFocus() {
        this.ionFocus.emit();
    }
    render() {
        return (h("button", { type: "button", class: `st-button st-button--${this.size} st-button--${this.type}`, onFocus: this.onFocus.bind(this) },
            h("slot", null)));
    }
    static get is() { return "st-button"; }
    static get properties() { return { "size": { "type": String, "attr": "size" }, "type": { "type": String, "attr": "type" } }; }
    static get events() { return [{ "name": "buttonClicked", "method": "buttonClicked", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionFocus", "method": "ionFocus", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:st-button:**/"; }
}
