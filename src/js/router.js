// use main.js to work around https://github.com/kriasoft/universal-router/issues/127
import UniversalRouter from 'universal-router/browser.js';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const routes = [
    {
        path: '/one',
        action: () => {
            history.push('/one', { some: 'state' });
            return 'one';
        }
    },
    {
        path: '/two',
        action: () => {
            history.push('/two', { some: 'state' });
            return 'two';
        }
    },
    {
        path: '(.*)',
        action: () => {
            history.push('/not-found', { some: 'state' });
            return 'not-found';
        }
    }
];

const router = new UniversalRouter(routes);

export default router;
