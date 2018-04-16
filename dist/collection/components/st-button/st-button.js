export class StButton {
    constructor() {
        this.options = {
            size: 'small',
            type: 'primary'
        };
    }
    buttonClickedHandler(size) {
        this.buttonClicked.emit({ buttonSize: size });
    }
    render() {
        return (h("button", { type: "button", class: `st-button st-button--${this.options.size} st-button--${this.options.type}`, onClick: () => this.buttonClickedHandler(this.options.size) },
            h("slot", null)));
    }
    static get is() { return "st-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "options": { "type": "Any", "attr": "options" } }; }
    static get events() { return [{ "name": "buttonClicked", "method": "buttonClicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:st-button:**/"; }
}
