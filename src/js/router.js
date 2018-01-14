import UniversalRouter from 'universal-router';

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
