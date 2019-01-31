import React, { Component } from 'react';
import Avatar from './Avatar.js';

class ContactItem extends Component {
    render() {
        const { avatarUrl, name, phone } = this.props;
        return (
            <li className="item">
                <Avatar imgUrl={avatarUrl} />
                <div className="content">
                    <h4 className="header">{name}</h4>
                    <div className="description">{phone}</div>
                </div>
            </li>
        );
    }
}

export default ContactItem;