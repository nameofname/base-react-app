import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';
// TODO ! !!!!!!!!!!!!!!!!!!!!!
// TODO ! !!!!!!!!!!!!!!!!!!!!!
// import router from './js/router';

ReactDOM.render(<App />, document.getElementById('root'));

// router();
registerServiceWorker();
