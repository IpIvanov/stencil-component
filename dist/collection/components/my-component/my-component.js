export class MyComponent {
    constructor() {
        this.isVisible = true;
    }
    render() {
        return (h("p", null,
            "Hello, my name is ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "my-component"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "isVisible": { "state": true }, "last": { "type": String, "attr": "last" } }; }
    static get style() { return "/**style-placeholder:my-component:**/"; }
}
