import React, { Component } from 'react';

function Avatar({ imgUrl }) {
    // let imgUrl = '';
    // if (login.includes('@')) {
    //     imgUrl = `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`;
    // } else {
    //     imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
    // }
    return (
        <img src={imgUrl} className="ui mini rounded image" />
    );
}

export default Avatar;