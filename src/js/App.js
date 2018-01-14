import React, { Component } from 'react';
import '../css/App.css';
import Header from './components/Header';
import Body from './components/Body';

/**
 * App class does basic routing based on the current state in history reducer. ????
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;
