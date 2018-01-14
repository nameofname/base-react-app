import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import { Provider } from 'react-redux';
import store from './js/store/store';
import registerServiceWorker from './js/registerServiceWorker';
import router from './js/router';

router();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
