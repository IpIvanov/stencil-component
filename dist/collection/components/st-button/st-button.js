export class StButton {
    constructor() {
        this.size = 'medium';
    }
    buttonClickedHandler(size) {
        this.buttonClicked.emit({ buttonSize: size });
    }
    render() {
        return (h("button", { type: "button", class: `st-button st-button--${this.size}`, onClick: () => this.buttonClickedHandler(this.size) },
            h("slot", null)));
    }
    static get is() { return "st-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "size": { "type": String, "attr": "size" } }; }
    static get events() { return [{ "name": "buttonClicked", "method": "buttonClicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:st-button:**/"; }
}
