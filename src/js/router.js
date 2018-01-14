// use main.js to work around https://github.com/kriasoft/universal-router/issues/127
import UniversalRouter from 'universal-router/browser.js';
import createHistory from 'history/createBrowserHistory';
import { updateUrl } from './store/actions';
const history = createHistory();

function navigate(path, search) {
    const url = `${path}${search ? '?' + search : ''}`;
    history.push(url, { some: 'state' });
    updateUrl(url);
    return url;
}

const routes = [
    {
        path: '/one',
        action: () => {
            return navigate('/one');
        }
    },
    {
        path: '/two',
        action: () => {
            return navigate('/two');
        }
    },
    {
        path: '(.*)',
        action: () => {
            return navigate('/not-found');
        }
    }
];

const router = new UniversalRouter(routes);

export default router;
