import React, { Component } from 'react';
import Input from './Input.js';

class NewContactContainer extends Component {
    state = {
        summaryNameText: '',
        summaryDepartmentText: ''
    };

    writeSomeTextOnName = (event) => {
        const myEvent = event.target.value;
        this.setState((prevState) => ({
            summaryNameText: myEvent
        }));
    }

    writeSomeTextOnDepartment = (event) => {
        const myEvent = event.target.value;
        this.setState((prevState) => ({
            summaryDepartmentText: myEvent
        }));
    }

    render() {
        const { placeholderText } = this.props;
        return (
            <div>
                <div>
                <Input placeholderText="Name" onTextInput={this.writeSomeTextOnName} /> 
                </div>
                <div>
                <Input placeholderText="Department" onTextInput={this.writeSomeTextOnDepartment} />
                </div>
                <p className="summary">{this.state.summaryNameText} {this.state.summaryDepartmentText}</p>
            </div>
        );
    }
}

export default NewContactContainer;