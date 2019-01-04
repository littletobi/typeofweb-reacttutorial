import React, { Component } from 'react';
import ContactItem from './ContactItem';

function ContactList() {
    return (
        <ul className="ui relaxed divided list selection" >
            <ContactItem
                login="type@ofweb1.com"
                name="Lena"
                department="JavaScript Developer"
            />
            <ContactItem
                login="typeofweb2"
                name="Brian"
                department="Human Resources"
            />
            <ContactItem
                login="typeofweb3"
                name="Rick"
                department="QA"
            />
            
        </ul >
    );
}

export default ContactList;