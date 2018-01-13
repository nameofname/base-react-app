import React, { Component } from 'react';
import lightning from '../../img/lightning.svg';
import wink from '../../img/wink.svg';

class Header extends Component {
    constructor() {
        super();
        this.svgs = {};
    }

    componentDidMount() {
        this.flash();
    }

    flash() {
        const { wink, lightning } = this.svgs;
        let itar = 0;
        setInterval(function flashIcon() {
            if (itar === 0) {
                itar = 1;
                lightning.style.display = 'block';
                wink.style.display = 'none';
            } else {
                itar = 0;
                wink.style.display = 'block';
                lightning.style.display = 'none';
            }
        }, 5000);
    }

    render() {
        return (
            <header className="app-header">
                <img
                    ref={l => (this.svgs.lightning = l)}
                    src={lightning}
                    className="app-logo lightning"
                    alt="lightning"
                    style={{ display: 'none' }}
                />
                <img
                    ref={w => (this.svgs.wink = w)}
                    src={wink}
                    className="app-logo wink"
                    alt="wink"
                />
                <h1 className="app-title">
                    Welcome to you, looking at this page.
                </h1>
            </header>
        );
    }
}

export default Header;
