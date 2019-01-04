import React, { Component } from 'react';
import Button from './Button.js';

class ActualDate extends Component {
    state = {
        date: new Date()
    }

    componentDidMount = () => {
        this.timerId = window.setInterval(this.updateDate, 1000);
    }

    componentWillUnmount = () => {
        window.clearInterval(this.timerId);
    }

    updateDate = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const dataStr = this.state.date.toString();
        return (
            <time>{dataStr}</time>
        );
    }
}

export default ActualDate;