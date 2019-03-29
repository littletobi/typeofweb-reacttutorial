import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
    contactToContactItem = contact => {
        const avatarUrl = contact.picture.thumbnail; 
        const { title, first, last } = contact.name;
        const name = `${title} ${first} ${last}`.trim();
        const phone = contact.phone;
        const key = contact.login.username;
        return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />;
    };

    render() {
        const { contacts } = this.props;
        return (
            <ul className="ui relaxed divided list selection" >
            {/* taki zapis sprawia, ze contacts bedzie mapowane jedynie jesli ma wartosc */}
                {contacts ? contacts.map(this.contactToContactItem) : null}
            </ul >
        );
    }
}

export default ContactList;

