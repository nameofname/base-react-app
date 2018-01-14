import React, { Component } from 'react';
import lightning from '../../img/lightning.svg';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <img
                    src={lightning}
                    className="app-logo lightning"
                    alt="lightning"
                    style={{ float: 'left' }}
                />
                <h1 className="app-title">Stock Ticker Comparison</h1>
            </header>
        );
    }
}

export default Header;
