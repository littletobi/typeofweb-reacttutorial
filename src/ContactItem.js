import React, { Component } from 'react';
import Avatar from './Avatar.js';

class ContactItem extends Component {
    render() {
        const { login, name, department } = this.props;
        return (
            <li className="item">
                <Avatar login={login} />
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="description">{department}</div>
                </div>
            </li>
        );
    }
}

export default ContactItem;