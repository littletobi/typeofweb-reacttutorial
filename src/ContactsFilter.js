import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchContacts } from "./redux/actions";

class ContactsFilter extends Component {
    handleSearchChange = e => {
        this.props.searchContacts(e.currentTarget.value);
    }

    render() {
        return (
            <div className="ui icon fluid input">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchContactsReducer}
                    onChange={this.handleSearchChange}
                />
                <i className="search icon" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchContacts: (text) => dispatch(searchContacts(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
