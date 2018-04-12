export class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("p", null,
                "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",
                h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"),
                " to get started."),
            h("stencil-route-link", { url: '/profile/stencil' },
                h("button", null, "Profile page")),
            h("my-component", { first: "Stencil", last: "JS" })));
    }
    static get is() { return "app-home"; }
    static get style() { return "/**style-placeholder:app-home:**/"; }
}
