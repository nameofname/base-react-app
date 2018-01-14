// use main.js to work around https://github.com/kriasoft/universal-router/issues/127
import UniversalRouter from 'universal-router/main.js';

const routes = [
    { path: '/one', action: () => 'this is the first route' },
    { path: '/two', action: () => "the second route, m'lady" },
    { path: '(.*)', action: () => 'Not Found' }
];

export default function router() {
    const r = new UniversalRouter(routes);

    r.resolve({ pathname: '/one' }).then(result => {
        console.log(result);
    });

    return r;
}
