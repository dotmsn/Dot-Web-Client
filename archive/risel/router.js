import RootComponent from './RootComponent';
import { isMatchUrl, getParams, getQueries } from './utils';

class Router {
    constructor() {
        this.routes = new Map();
    }

    addRoute(routePattern, component) {
        this.routes.set(routePattern, component);
    }

    getContext() {
        let component, pattern;

        this.routes.forEach((_component, _pattern) => {
            const url = window.location.pathname;
            if (isMatchUrl(_pattern, url)) {
                component = _component;
                pattern = _pattern;
            }
        });

        return { component, pattern };
    }

    getComponent() {
        const { pattern, component } = this.getContext();
        const url = window.location.pathname;
        const query = getQueries(url);
        const params = getParams(pattern, url);

        const pageProps = {
            query,
            params,
        };

        return (
            <RootComponent
                router={this}
                pageProps={pageProps}
                Component={component}
            />
        );
    }
}

export default Router;
