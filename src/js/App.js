import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../css/App.css';
import Header from './components/Header';
import Body from './components/Body';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <Body />
                </div>
            </Provider>
        );
    }
}

export default App;
