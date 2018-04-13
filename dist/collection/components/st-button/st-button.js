export class StButton {
    constructor() {
        this.title = 'Click me!';
        this.size = 'small';
    }
    buttonClickedHandler(event) {
        this.buttonClicked.emit(event);
    }
    render() {
        return (h("button", { type: "button", class: `st-button st-button--${this.size} st-button--${this.type}`, onClick: (event) => this.buttonClickedHandler(event) }, this.title));
    }
    static get is() { return "st-button"; }
    static get properties() { return { "size": { "type": String, "attr": "size" }, "title": { "type": String, "attr": "title" }, "type": { "type": String, "attr": "type" } }; }
    static get events() { return [{ "name": "buttonClicked", "method": "buttonClicked", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:st-button:**/"; }
}
