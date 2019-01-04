import React, {Component} from 'react';

function Button({label="Dodaj", onButtonClick }) {
    return(
        <button className="ui button" onClick={onButtonClick}>{label}</button>
    );
}

export default Button;