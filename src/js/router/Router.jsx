import createHistory from 'history/createBrowserHistory';
// import routes from './routes';

export default class Router {
    constructor(options) {
        // const { routes, initialUriRef } = options;

        // this.routes = routes;
        this.history = createHistory();
        // this.previousnewUriRef = initialUriRef;
    }

    navigate(newUriRef) {
        const { pathname, search } = this.history.location;
        // const currentUriRef = stripRoutingSegment(`${pathname}${search}`); // what's currently in the browser address bar
        const currentUriRef = `${pathname}${search}`;

        if (newUriRef !== currentUriRef) {
            //update browser url bar if URI changes in the store
            this.history.push(newUriRef);
            // // keep track of previous push so we don't push any history twice
            // this.previousnewUriRef = newUriRef;
        }
    }
}

export { Router };
