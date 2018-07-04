import React, { Component } from 'react';
import lightning from '../../img/lightning.svg';
import wink from '../../img/wink.svg';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <img
                    src={wink}
                    className="app-logo lightning"
                    alt="lightning"
                    style={{ float: 'left' }}
                />
                <h1 className="app-title">This is the title of your app</h1>
            </header>
        );
    }
}

export default Header;
