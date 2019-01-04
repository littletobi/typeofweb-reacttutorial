import React, { Component } from 'react';

const Input = ({ placeholderText, onTextInput }) => {
    return (
        <div className="ui input">
            <input placeholder={placeholderText} onInput={onTextInput}></input>
        </div>
    );
}

export default Input;