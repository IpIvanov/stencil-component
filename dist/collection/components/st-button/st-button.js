export class StButton {
    constructor() {
        this.buttonSize = 'medium';
        this.buttonType = 'primary';
    }
    buttonClickedHandler(size) {
        this.buttonClicked.emit({ buttonSize: size });
    }
    render() {
        return (h("button", { type: "button", class: `st-button st-button--${this.buttonSize} st-button--${this.buttonType}`, onClick: () => this.buttonClickedHandler(this.buttonSize) },
            h("slot", null)));
    }
    static get is() { return "st-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "buttonSize": { "type": String, "attr": "button-size" }, "buttonType": { "type": String, "attr": "button-type" } }; }
    static get events() { return [{ "name": "buttonClicked", "method": "buttonClicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:st-button:**/"; }
}
