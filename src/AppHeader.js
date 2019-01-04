import React, { Component } from 'react';
import Button from './Button.js';

class AppHeader extends Component {
    handleClick = () => {
        alert("Kliknięto");
    }

    render() {
        return (
            <header className="ui fixed menu">
                <nav className="ui container">
                    <a href="#" className="header item">
                        <img
                            className="logo"
                            src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
                        />
                        Lista kontaktów
                    </a>
                    <div className="header item">
                        <Button label={"Dodaj!"} onButtonClick={this.handleClick}></Button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default AppHeader;