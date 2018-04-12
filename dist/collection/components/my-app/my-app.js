export class MyApp {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Stencil App Starter")),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route", { url: '/', component: 'app-home', exact: true }),
                    h("stencil-route", { url: '/profile/:name', component: 'app-profile' })))));
    }
    static get is() { return "my-app"; }
    static get style() { return "/**style-placeholder:my-app:**/"; }
}
