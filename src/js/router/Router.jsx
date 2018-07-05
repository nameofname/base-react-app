import createHistory from 'history/createBrowserHistory';

export default class Router {
    constructor(options) {
        this.history = createHistory();
    }

    navigate(newUriRef) {
        const { pathname, search } = this.history.location;
        // const currentUriRef = stripRoutingSegment(`${pathname}${search}`); // what's currently in the browser address bar
        const currentUriRef = `${pathname}${search}`;

        //update browser url bar only if it has changed
        if (newUriRef !== currentUriRef) {
            this.history.push(newUriRef);
        }
    }
}

export { Router };
