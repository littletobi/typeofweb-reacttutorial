import React, { Component } from 'react';
import ActualDate from './ActualDate.js';
import Button from './Button.js';

class ActualDateContainer extends Component {
    state = {
        isDateVisible: true        
    }

    dateButtonHandleClick = () => {
        this.setState((prevState) => ({
            isDateVisible: !prevState.isDateVisible,
        }));
    }

    render() {
        return (
            <div>
                <Button label={this.state.isDateVisible ? "Hide" : "Show"} onButtonClick={this.dateButtonHandleClick}></Button>
                {this.state.isDateVisible && <ActualDate />}
            </div>
        );
    }
}

export default ActualDateContainer;